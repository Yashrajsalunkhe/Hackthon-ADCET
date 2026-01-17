# ADCET Hackathon 3.0 - Deployment Guide

## Vercel Deployment Instructions

### Prerequisites
- A GitHub account
- A Vercel account (sign up at https://vercel.com)

### Deploy to Vercel

#### Method 1: Import from GitHub (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project**:
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project.vercel.app`

#### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Configuration Files

The following files have been configured for Vercel deployment:

- **`vercel.json`**: Handles routing for React Router
- **`package.json`**: Contains build scripts
- **`vite.config.js`**: Vite configuration

### Important Notes

1. **React Router**: The `vercel.json` file handles client-side routing by redirecting all requests to `index.html`

2. **Image Paths**: All images are served from the `/public` directory and referenced with absolute paths starting with `/`

3. **Build Output**: The production build is generated in the `dist` directory

4. **Environment Variables**: If you need environment variables:
   - Add them in Vercel Dashboard → Settings → Environment Variables
   - Reference them in your code with `import.meta.env.VITE_YOUR_VAR_NAME`

### Custom Domain

To add a custom domain:
1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

### Troubleshooting

**Build Fails**:
- Check build logs in Vercel Dashboard
- Ensure all dependencies are listed in `package.json`
- Test locally with `npm run build`

**404 Errors on Refresh**:
- This is handled by `vercel.json` rewrites
- Make sure the file is in your repository

**Images Not Loading**:
- Verify image paths start with `/`
- Check that images exist in the `public` directory

### Testing Locally

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to see the production build.

## Project Structure

```
adcet-hackathon-react/
├── public/              # Static assets
│   ├── img/            # Images
│   ├── assets/         # Other assets
│   └── theme/          # Theme files
├── src/
│   ├── components/     # React components
│   ├── css/           # Stylesheets
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── dist/              # Build output (generated)
├── vercel.json        # Vercel configuration
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Support

For issues or questions:
- Email: hackathon@adcet.ac.in
- Website: www.adcet.ac.in

---

**Happy Deploying! 🚀**
