#!/bin/bash

set -e

# === CONFIGURATION ===

# Common settings
KEY_PATH="~/Downloads/sols-keypair.pem"
GIT_REPO="https://github.com/tracy100001/sols-dragon-323.git"
APP_NAME="solstice-website"
BRANCH="main"

# Define array of targets: "host user remote_dir sub_dir env_file"
TARGETS=(
  "ec2-52-15-95-218.us-east-2.compute.amazonaws.com ubuntu /home/ubuntu/website website .env.production"
  "ec2-18-223-109-109.us-east-2.compute.amazonaws.com ubuntu /home/ubuntu/supabase supabase .env.production"
)

# === FUNCTIONS ===

deploy_to_host() {
  local HOST="$1"
  local USER="$2"
  local REMOTE_DIR="$3"
  local SUB_DIR="$4"
  local ENV_FILE="$5"

  echo "========================================"
  echo "🚀 Deploying to $USER@$HOST"
  echo "========================================"

  # Check if env file exists locally
  if [ ! -f "$SUB_DIR/$ENV_FILE" ]; then
    echo "❌ Env file $SUB_DIR/$ENV_FILE not found! Skipping $HOST."
    return 1
  fi

  echo "==> 📡 Syncing env file..."
  scp -i $KEY_PATH "$SUB_DIR/$ENV_FILE" $USER@$HOST:$REMOTE_DIR/$ENV_FILE

  echo "==> 🔗 Connecting to $HOST..."
  ssh -i $KEY_PATH $USER@$HOST << EOF
    set -e
    sudo apt update

    # Install Docker & Docker Compose if missing
    if ! command -v docker &> /dev/null; then
      echo "==> 🐳 Installing Docker..."
      curl -fsSL https://get.docker.com -o get-docker.sh
      sh get-docker.sh
      sudo usermod -aG docker $USER
    fi

    if ! command -v docker-compose &> /dev/null; then
      echo "==> 🐳 Installing Docker Compose..."
      sudo curl -L "https://github.com/docker/compose/releases/download/v2.38.2/docker-compose-\$(uname -s)-\$(uname -m)" -o /usr/local/bin/docker-compose
      sudo chmod +x /usr/local/bin/docker-compose
    fi

    mkdir -p $REMOTE_DIR
    cd $REMOTE_DIR

    # Clone repo if not present
    if [ ! -d ".git" ]; then
      echo "==> 🛠 Cloning repository..."
      git clone -b $BRANCH $GIT_REPO .
    else
      echo "==> 🔄 Pulling latest changes..."
      git reset --hard
      git pull origin $BRANCH
    fi

    cd $SUB_DIR

    echo "==> 🧹 Cleaning old build files..."
    rm -rf .next

    echo "==> 🐳 Deploying with Docker Compose..."
    docker compose pull || true
    docker compose down || true
    docker compose up -d --build

    echo "✅ Deployment on $HOST complete."
EOF
}

# Selective deploy by index passed as argument
INDEX=${1:-0}

if (( INDEX < 0 || INDEX >= ${#TARGETS[@]} )); then
  echo "❌ Invalid target index $INDEX"
  exit 1
fi

deploy_to_host ${TARGETS[$INDEX]}

echo "✅✅ Deployment completed successfully."
