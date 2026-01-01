# Deployment Guide

## Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Navigate to the web directory:
   ```bash
   cd web
   ```

3. Build the extension zip file:
   ```bash
   cd ..
   .\build-extension.ps1
   cd web
   ```

4. Deploy to Vercel:
   ```bash
   vercel
   ```

5. Follow the prompts to link your project or create a new one.

6. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using GitHub Integration

1. Push your code to a GitHub repository.

2. Go to [vercel.com](https://vercel.com) and sign in.

3. Click "Add New Project".

4. Import your GitHub repository: `draphael123/Fountain-CHrome-Theme`

5. **IMPORTANT**: In the project configuration:
   - Set **Root Directory** to `web`
   - Framework Preset should auto-detect as "Next.js"
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

6. Click "Deploy".

**Note**: Make sure the Root Directory is set to `web` in the Vercel project settings. This is the most common cause of 404 errors.

### Important Notes

- Make sure `extension.zip` exists in `web/public/` before deploying
- The zip file is created using the `build-extension.ps1` script
- For automatic builds, you can add the build script to your CI/CD pipeline

### Environment Variables

No environment variables are required for this project.

### Build Settings (if manually configuring)

- **Framework Preset**: Next.js
- **Root Directory**: `web` ⚠️ **This is critical - must be set to `web`**
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default for Next.js)
- **Install Command**: `npm install` (default)

### Troubleshooting 404 Errors

If you see a 404 error on Vercel:
1. Go to your project settings in Vercel dashboard
2. Navigate to "Settings" → "General"
3. Under "Root Directory", make sure it's set to `web`
4. Click "Save"
5. Redeploy your project

The Root Directory setting tells Vercel where your Next.js app is located in the repository.

