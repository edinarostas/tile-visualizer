# 🧱 Tile Visualizer

A responsive web app that allows users to preview tile patterns, materials, and colors in real time — built to showcase modern front-end skills and D3-based data visualization.

## 🌟 Features

- 🎨 Real-time tile color and pattern preview
- 🧩 Supports multiple tile layouts: Herringbone, Stacked, Basketweave
- 📊 D3.js used for drawing custom tile patterns in SVG
- ⚛️ Built with React + SASS
- 🗃️ Mock GraphQL tile data (easily extendable to real APIs)
- 🎯 Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- React + Vite
- D3.js
- React Colorful (hex color picker)
- SCSS
- GraphQL (mocked)
- Bash scripting for deployment

## 🚀 Deployment

### Manual Deployment

1. Install dependencies
```bash
npm install
```

2. Run locally
```bash
npm run dev
```

3. Deploy to GitHub Pages
```bash
npm run deploy
```

### Automatic Deployment with GitHub Actions

The project is configured with GitHub Actions for automatic deployment. Every push to the `main` branch will trigger a deployment to GitHub Pages. Here's how it works:

1. The workflow is defined in `.github/workflows/deploy.yml`
2. When you push to `main`, GitHub Actions will:
   - Set up Node.js environment
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

### GitHub Pages Configuration

1. Go to your repository settings on GitHub
2. Navigate to "Pages" under "Code and automation"
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
   - Branch: The workflow will handle this automatically

Your site will be available at: https://edinarostas.github.io/tile-visualizer

### Troubleshooting

If you encounter any issues with deployment:

1. Check the GitHub Actions tab in your repository for any failed workflows
2. Ensure your repository has the correct permissions for GitHub Pages
3. Verify that the `homepage` field in `package.json` matches your GitHub Pages URL
4. Make sure all dependencies are properly listed in `package.json`
