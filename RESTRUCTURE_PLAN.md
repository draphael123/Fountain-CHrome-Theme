# Project Restructure Plan

## Current Issue
Vercel is rejecting "web" as a folder name for Root Directory, causing deployment failures.

## Proposed Solution
Move the Next.js application from `web/` to the root directory. This is the standard Vercel approach and will eliminate the root directory configuration issue.

## New Structure (After Restructure)

```
Chrome Theme/
├── app/                    # Next.js app directory (moved from web/app)
├── public/                 # Public assets (moved from web/public)
│   └── extension.zip
├── extension/              # Chrome extension (stays the same)
│   ├── manifest.json
│   └── images/
├── package.json            # Next.js package.json (moved from web/)
├── next.config.js          # Next.js config (moved from web/)
├── tsconfig.json           # TypeScript config (moved from web/)
└── README.md
```

## Benefits
1. ✅ No Root Directory configuration needed
2. ✅ Standard Vercel/Next.js structure
3. ✅ Simpler deployment
4. ✅ No folder name validation issues

## Should We Proceed?
If you'd like, I can restructure the project now. This will:
- Move all files from `web/` to root
- Update all paths
- Keep the extension folder separate
- Commit and push the changes

This is a clean solution that will work immediately with Vercel.

