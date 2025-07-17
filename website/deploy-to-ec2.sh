#!/bin/bash

# === CONFIGURATION ===
APP_NAME="solstice-website"                     # Local folder name
ARCHIVE_NAME="$APP_NAME.tar.gz"
EC2_USER="ubuntu"
EC2_HOST="ec2-52-15-95-218.us-east-2.compute.amazonaws.com"                     # e.g. 3.12.34.56
KEY_PATH="~/Downloads/sols-keypair.pem"            # Path to your EC2 key file
REMOTE_DIR="/home/ubuntu/$APP_NAME"
PM2_NAME="nextjs-app"                     # PM2 process name

echo "==> 🧼 Cleaning old archive..."
rm -f $ARCHIVE_NAME

echo "==> 📦 Compressing app directory (excluding env, .next, node_modules, etc)..."
tar -czf $ARCHIVE_NAME --exclude-vcs --exclude-ignore=.deployignore .

echo "==> 📡 Uploading $ARCHIVE_NAME to EC2..."
scp -i $KEY_PATH $ARCHIVE_NAME $EC2_USER@$EC2_HOST:~/

echo "==> 🖥 Connecting to EC2 and deploying..."
ssh -i $KEY_PATH $EC2_USER@$EC2_HOST << EOF
  # Install Node.js if missing
  if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
  fi

  # Install pnpm if not installed
  if ! command -v pnpm &> /dev/null; then
    echo "==> 📦 Installing pnpm..."
    npm install -g pnpm
  fi

  # Install Nginx and Certbot
  sudo apt update
  sudo apt install -y nginx certbot python3-certbot-nginx

  echo "==> 🧹 Cleaning old app..."
  sudo rm -rf $REMOTE_DIR
  mkdir -p $REMOTE_DIR

  echo "==> 📦 Extracting app..."
  tar -xzf $ARCHIVE_NAME -C $REMOTE_DIR
  rm $ARCHIVE_NAME
  cd $REMOTE_DIR

  echo "==> 📥 Installing dependencies with pnpm..."
  pnpm install --frozen-lockfile --prod

  echo "==> 🏗 Building app with pnpm..."
  pnpm build

  echo "==> 🚀 Restarting with PM2..."
  pm2 delete $PM2_NAME || true
  pm2 start "pnpm start -- -p 3000 -H 127.0.0.1" --name "$PM2_NAME"
  pm2 save

  echo "==> ⚙️ Configuring Nginx..."

  # Create Nginx config
  sudo tee /etc/nginx/sites-available/nextjs > /dev/null << 'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        return 301 https://\$host\$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /etc/ssl/certs/selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/selfsigned.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINX

  echo "==> 🔐 Generating self-signed SSL cert..."
  sudo mkdir -p /etc/ssl/private
  sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/selfsigned.key \
    -out /etc/ssl/certs/selfsigned.crt \
    -subj "/CN=localhost"

  sudo ln -sf /etc/nginx/sites-available/nextjs /etc/nginx/sites-enabled/nextjs
  sudo rm -f /etc/nginx/sites-enabled/default
  sudo nginx -t && sudo systemctl restart nginx
EOF


echo "✅ App deployed and secured with self-signed SSL!"
