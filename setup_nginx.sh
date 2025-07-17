#!/bin/bash

# === Config ===
SERVER_USER="ubuntu"
SERVER_HOST="ec2-18-116-21-198.us-east-2.compute.amazonaws.com"
SSH_KEY="$HOME/Downloads/sols-keypair.pem"
DOMAIN="solsticecinematics.com"
TARGET_PORT="3000"  # Docker app port

# === SSH Command ===
ssh -i "$SSH_KEY" $SERVER_USER@$SERVER_HOST << EOF
  set -e

  echo "Updating system and installing dependencies..."
  sudo apt update
  sudo apt install -y nginx certbot python3-certbot-nginx

  echo "Configuring UFW firewall..."
  sudo ufw allow OpenSSH
  sudo ufw allow 'Nginx Full'
  sudo ufw --force enable

  echo "Creating Nginx config for $DOMAIN..."
  sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << EOL
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:$TARGET_PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

  echo "Enabling site and reloading Nginx..."
  sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
  sudo nginx -t
  sudo systemctl reload nginx

  echo "Obtaining SSL certificate with Certbot..."
  sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN --redirect

  echo "Setting up automatic renewal test..."
  sudo certbot renew --dry-run

  echo "Done! SSL configured and reverse proxy set up."
EOF
