#!/bin/bash

echo "🔧 Building app..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
gh-pages -d dist
