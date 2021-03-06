#!/bin/bash

set -euo pipefail

zola build

set +e
git update-index --refresh
if git diff-index --quiet HEAD --; then
    echo "Ready for deployment!"
else
    echo "Failed: commit changes to public/ before deploying."
    exit 1
fi
