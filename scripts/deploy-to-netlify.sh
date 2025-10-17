#!/bin/bash
set -e

echo "Deploying branch: $BRANCH"

cd deploy

echo "Deploying to PRODUCTION..."
netlify deploy \
    --dir=dist \
    --site=$SITE_ID \
    --auth=$NETLIFY_AUTH_TOKEN \
    --prod

echo "Deployment completed successfully"