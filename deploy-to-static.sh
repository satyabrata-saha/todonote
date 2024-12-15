#!/bin/bash
set -e

# Ensure you're on the main branch
git checkout main

# Build the project
npm run build

# Switch to static branch
git checkout static

# Remove all files except .git
git rm -rf .

# Copy dist content to branch root
cp -r dist/* .

# # Add changes, commit, and push
# git add .
# git commit -m "Update static branch from dist folder"
# git push origin static

# # Switch back to main
# git checkout main