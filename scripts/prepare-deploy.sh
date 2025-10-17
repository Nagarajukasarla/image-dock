#!/bin/bash
set -e

# Create deploy directory structure
mkdir -p deploy

# Copy dist directory to deploy/dist
cp -r dist deploy/dist

# Create scripts directory and copy deploy scripts
mkdir -p deploy/scripts
cp -v scripts/deploy-to-netlify.sh deploy/scripts/

chmod +x deploy/scripts/*.sh

echo "Deployment preparation completed successfully"