# Fountain.net Chrome Theme

A beautiful Chrome theme extension inspired by Fountain.net's elegant design, with a modern Vercel-hosted website.

## Project Structure

```
├── extension/          # Chrome extension files
│   ├── manifest.json   # Extension manifest
│   └── images/         # Theme images (optional)
├── web/                # Next.js website for Vercel
│   ├── app/            # Next.js app directory
│   ├── public/         # Static assets
│   └── package.json    # Dependencies
└── README.md
```

## Chrome Extension

The extension is located in the `extension/` directory. It includes:

- `manifest.json` - Chrome extension manifest with theme configuration
- Color scheme inspired by modern dark themes
- Customizable theme properties

### Installation

1. Download the extension files
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the `extension` folder

## Website

The website is built with Next.js and can be deployed to Vercel.

### Development

```bash
cd web
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site.

### Deployment to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the `web` directory: `cd web`
3. Run `vercel` and follow the prompts
4. Or connect your GitHub repo to Vercel for automatic deployments

## Customization

### Theme Colors

Edit `extension/manifest.json` to customize colors. The theme uses:
- Dark backgrounds: `#1c1f26` to `#323742`
- Primary accent: `#3d82f6` (blue)
- Text colors: `#f0f0f0` for primary, `#b4b4b4` for secondary

### Theme Images

Add custom images to `extension/images/`:
- `theme_frame.png` - Browser frame
- `theme_ntp_background.png` - New Tab Page background
- Other images as specified in `manifest.json`

### Website Styling

Edit `web/app/globals.css` and `web/app/page.module.css` to customize the website appearance.

## License

This project is open source and available for personal use.

