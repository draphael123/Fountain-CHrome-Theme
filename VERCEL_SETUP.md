# Vercel Setup Instructions

## ⚠️ Important: Root Directory Configuration

The `rootDirectory` property **cannot** be set in `vercel.json`. It must be configured in the Vercel Dashboard.

## Step-by-Step Setup

### 1. Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### 2. Select Your Project
Click on **Fountain-Chrome-Theme**

### 3. Open Settings
- Click **Settings** in the top navigation bar
- Click **General** in the left sidebar

### 4. Configure Root Directory
- Scroll down to find **Root Directory**
- Click **Edit** button
- Enter: `web`
- Click **Save**

### 5. Wait for Redeployment
Vercel will automatically trigger a new deployment with the correct settings.

## What vercel.json Contains

The `vercel.json` file now only contains:
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`
- Framework: `nextjs`

These settings are relative to the root directory you set in the dashboard.

## Troubleshooting

If you still see 404 errors after setting the root directory:
1. Check that the Root Directory is set to exactly `web` (lowercase)
2. Ensure there are no extra spaces
3. Wait for the deployment to complete
4. Check the build logs for any errors

## Verification

After deployment succeeds:
- Visit your Vercel URL
- You should see the website homepage
- The download button should work
- All sections should display correctly

