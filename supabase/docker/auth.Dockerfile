FROM supabase/gotrue:v2.178.0-rc.4

USER root

# Install dependencies
RUN apk add --no-cache bash postgresql-client

# Copy custom scripts
COPY ./scripts/auth-init.sh /app/auth-init.sh
COPY ./scripts/entrypoint-wrapper.sh /app/entrypoint-wrapper.sh

RUN chmod +x /app/auth-init.sh /app/entrypoint-wrapper.sh

USER supabase

ENTRYPOINT ["/app/entrypoint-wrapper.sh"]
