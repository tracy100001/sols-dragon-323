#!/bin/bash

set -e

# === CONFIGURATION ===

KEY_PATH="$HOME/Downloads/sols-keypair.pem"
GIT_REPO="https://github.com/tracy100001/sols-dragon-323.git"
BRANCH="main"

# Define array of targets: "host user remote_dir sub_dir env_file"
TARGETS=(
  "ec2-18-116-21-198.us-east-2.compute.amazonaws.com ubuntu /home/ubuntu/solstice website .env.production scripts/deploy-init.sh"
  "ec2-18-223-109-109.us-east-2.compute.amazonaws.com ubuntu /home/ubuntu/solstice supabase .env.production scripts/host-init.sh"
)

# === FUNCTIONS ===

run_stage() {
  local HOST="$1"
  local USER="$2"
  local REMOTE_DIR="$3"
  local SUB_DIR="$4"
  local ENV_FILE="$5"
  local INIT_SCRIPT="$6"

  echo "🔧 Running full deploy pipeline for $HOST..."

  echo ""
  echo "➡️ [1/3] Provision and Clone Repo..."
  ssh -i $KEY_PATH $USER@$HOST << EOF
    set -e
    sudo apt update

    if ! command -v docker &> /dev/null; then
      echo "Installing Docker..."
      curl -fsSL https://get.docker.com -o get-docker.sh
      sh get-docker.sh
      sudo usermod -aG docker $USER
    fi

    if ! command -v docker-compose &> /dev/null; then
      echo "Installing Docker Compose..."
      sudo curl -L "https://github.com/docker/compose/releases/download/v2.38.2/docker-compose-\$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose
      sudo chmod +x /usr/local/bin/docker-compose
    fi

    # Prepare project dir
    sudo rm -rf $REMOTE_DIR
    mkdir -p $REMOTE_DIR
    cd $REMOTE_DIR

    git clone -b $BRANCH $GIT_REPO .

    # === Run INIT script if exists ===
    if [ -f $REMOTE_DIR/$SUB_DIR/$INIT_SCRIPT ]; then
      echo "➡️ Executing host init script: $INIT_SCRIPT"
      chmod +x $REMOTE_DIR/$SUB_DIR/$INIT_SCRIPT
      $REMOTE_DIR/$SUB_DIR/$INIT_SCRIPT
    else
      echo "⚠️ No init script found at $REMOTE_DIR/$SUB_DIR/$INIT_SCRIPT"
    fi
EOF

  echo ""
  echo "➡️ [2/3] Sync .env File..."
  echo "Uploading: $SUB_DIR/$ENV_FILE --> $REMOTE_DIR/$SUB_DIR/.env"

  scp -i "$KEY_PATH" "$SUB_DIR/$ENV_FILE" "$USER@$HOST:$REMOTE_DIR/$SUB_DIR/.env"

  echo ""
  echo "➡️ [3/3] Deploy via Docker Compose..."
  ssh -i $KEY_PATH $USER@$HOST << EOF
    set -e
    cd $REMOTE_DIR/$SUB_DIR
    rm -rf .next

    docker compose down --remove-orphans

    docker compose pull || true
    docker compose up -d --build
EOF

  echo "✅ $SUB_DIR deployed to $HOST successfully."
  echo "--------------------------------------------"
  echo ""
}

# === EXECUTION LOGIC ===

INDEX=${1:-0}

if (( INDEX < 0 || INDEX >= ${#TARGETS[@]} )); then
  echo "❌ Invalid index: $INDEX"
  exit 1
fi

# Parse selected target
IFS=' ' read -r HOST USER REMOTE_DIR SUB_DIR ENV_FILE INIT_SCRIPT <<< "${TARGETS[$INDEX]}"

run_stage "$HOST" "$USER" "$REMOTE_DIR" "$SUB_DIR" "$ENV_FILE" "$INIT_SCRIPT"

echo "🎉 ALL DONE — Project [$SUB_DIR] deployed to [$HOST]"
