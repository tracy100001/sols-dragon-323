#!/bin/sh

echo "Waiting for DB..."
until pg_isready -h $DB_HOST -U $DB_USER; do
  sleep 1
done

echo "Running auth DB fixes..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d postgres << EOF
-- Replace <user> with the current user being used by gotrue
GRANT ALL PRIVILEGES ON SCHEMA auth TO $DB_USER;
ALTER SCHEMA auth OWNER TO $DB_USER;

-- Do the same for all tables
DO \$\$
DECLARE
    obj record;
BEGIN
    FOR obj IN
        SELECT tablename FROM pg_tables WHERE schemaname = 'auth'
    LOOP
        EXECUTE format('ALTER TABLE auth.%I OWNER TO $DB_USER;', obj.tablename);
    END LOOP;
END;
\$\$;

-- Create the enum type if it doesn't exist
DO \$\$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_type t
    JOIN pg_namespace n ON n.oid = t.typnamespace
    WHERE t.typname = 'factor_type'
    AND n.nspname = 'auth'
  ) THEN
    CREATE TYPE auth.factor_type AS ENUM ('totp');  -- start with known values
  END IF;
END\$\$;

EOF

echo "Auth init complete."
