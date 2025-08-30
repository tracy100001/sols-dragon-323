#!/bin/bash

# === Config ===
SERVER_USER="ubuntu"
SERVER_HOST="ec2-13-59-214-169.us-east-2.compute.amazonaws.com"
SSH_KEY="$HOME/Downloads/sols-keypair.pem"
DOMAIN="solsticecinematicsproductions.com"
TARGET_PORT="3000"  # Docker app port

# === SSH Command ===
ssh -i "$SSH_KEY" $SERVER_USER@$SERVER_HOST << EOF
  set -e

  echo "Removing old Nginx and SSL config for $DOMAIN..."
  sudo rm -f /etc/nginx/sites-enabled/$DOMAIN
  sudo rm -f /etc/nginx/sites-available/$DOMAIN
  sudo rm -rf /etc/letsencrypt/live/$DOMAIN
  sudo rm -rf /etc/letsencrypt/archive/$DOMAIN
  sudo rm -f /etc/letsencrypt/renewal/$DOMAIN.conf

  echo "Installing Nginx and Certbot..."
  sudo apt update
  sudo apt install -y nginx certbot python3-certbot-nginx

  echo "Configuring UFW firewall..."
  sudo ufw allow OpenSSH
  sudo ufw allow 'Nginx Full'
  sudo ufw --force enable

  echo "Setting up Nginx config for $DOMAIN..."
  sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << 'EOL'
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:$TARGET_PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

  echo "Enabling site and restarting Nginx..."
  sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
  sudo nginx -t && sudo systemctl restart nginx

  echo "Requesting SSL certificate with Certbot..."
  sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN --redirect --force-renewal

  echo "Verifying Certbot auto-renew..."
  sudo certbot renew --dry-run

  echo "✅ Nginx reverse proxy and SSL setup complete for $DOMAIN"
EOF
