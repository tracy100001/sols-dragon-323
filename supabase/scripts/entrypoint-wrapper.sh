#!/bin/sh

# Optional: wait for the database to be ready
until pg_isready -h $DB_HOST -U $DB_USER; do
  echo "⏳ Waiting for Postgres..."
  sleep 2
done

# Run your auth init script
echo "🚀 Running auth-init.sh..."
/app/auth-init.sh

# Finally, call the original gotrue startup
echo "✅ Starting GoTrue..."
/app/entrypoint.sh
