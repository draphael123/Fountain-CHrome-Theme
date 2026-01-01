# Fixing "Invalid Folder Name" Error in Vercel

## Problem
Vercel is rejecting "web" as an invalid folder name when setting the Root Directory.

## Solutions to Try

### Option 1: Use Relative Path Format
When setting the Root Directory in Vercel Dashboard, try:
- `./web` (with dot-slash prefix)

Instead of just:
- `web`

### Option 2: Verify No Extra Characters
Make sure when you type "web" in the Vercel dashboard:
- No leading spaces
- No trailing spaces
- No special characters
- Exactly: `web` (lowercase)

### Option 3: Check Folder Name
The folder is correctly named `web` (all lowercase, no spaces).

### Option 4: Alternative - Move Next.js to Root (If Above Don't Work)
If Vercel continues to reject the folder name, we can restructure the project to move the Next.js app to the root directory. However, this is a bigger change.

## Current Steps

1. Go to Vercel Dashboard → Settings → General
2. In Root Directory field, try entering: `./web`
3. If that doesn't work, try just: `web` (make sure no spaces)
4. Save and wait for redeployment

## Verification

After setting, check:
- Does it accept the folder name?
- Does the build start?
- Check build logs for any path-related errors

