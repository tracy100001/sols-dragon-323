FROM supabase/gotrue:v2.177.0

USER root

# Install dependencies
RUN apk add --no-cache bash postgresql-client

# Copy custom scripts
COPY ./scripts/auth-init.sh /app/auth-init.sh
COPY ./scripts/entrypoint-wrapper.sh /app/entrypoint.sh

RUN chmod +x /app/auth-init.sh /app/entrypoint.sh

USER supabase

ENTRYPOINT ["/app/entrypoint.sh"]
