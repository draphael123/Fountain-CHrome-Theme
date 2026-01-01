'use client'

import styles from './page.module.css'

export default function Home() {
  const handleDownload = () => {
    // Create a download link for the extension
    const link = document.createElement('a')
    link.href = '/extension.zip'
    link.download = 'fountain-theme-extension.zip'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleInstallInstructions = () => {
    window.open('https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked', '_blank')
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>🌊</div>
            <h1 className={styles.title}>Fountain.net Chrome Theme</h1>
          </div>
          <p className={styles.subtitle}>
            Transform your Chrome browser with a beautiful dark theme inspired by Fountain.net's elegant design
          </p>
        </header>

        <section className={styles.about}>
          <h2>What is This?</h2>
          <p className={styles.description}>
            The Fountain.net Chrome Theme is a custom browser theme extension that gives your Chrome browser 
            a sleek, modern dark appearance. It changes the colors of your browser's interface—including the 
            address bar, tabs, bookmarks bar, and new tab page—to create a cohesive, eye-friendly browsing 
            experience inspired by Fountain.net's aesthetic.
          </p>
          <p className={styles.description}>
            This is a Chrome extension that applies a custom theme to your browser. It's completely free, 
            open-source, and easy to install. No data collection, no tracking—just a beautiful theme for 
            your browser.
          </p>
        </section>

        <div className={styles.content}>
          <section className={styles.preview}>
            <div className={styles.previewWindow}>
              <div className={styles.previewHeader}>
                <div className={styles.previewControls}>
                  <span className={styles.controlDot}></span>
                  <span className={styles.controlDot}></span>
                  <span className={styles.controlDot}></span>
                </div>
              </div>
              <div className={styles.previewContent}>
                <div className={styles.previewTabs}>
                  <div className={`${styles.previewTab} ${styles.active}`}>
                    New Tab
                  </div>
                  <div className={styles.previewTab}>Tab</div>
                  <div className={styles.previewTab}>Tab</div>
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewGradient}></div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Beautiful Design</h3>
              <p>Inspired by Fountain.net's clean and modern aesthetic</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌙</div>
              <h3>Dark Theme</h3>
              <p>Easy on the eyes with carefully selected colors</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Fast & Lightweight</h3>
              <p>Minimal performance impact on your browser</p>
            </div>
          </section>

          <section className={styles.installation}>
            <h2>Installation</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Download the Extension</h3>
                  <p>Click the button below to download the theme extension</p>
                  <button className={styles.downloadButton} onClick={handleDownload}>
                    Download Extension
                  </button>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Extract the Files</h3>
                  <p>Unzip the downloaded file to a folder on your computer</p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Load in Chrome</h3>
                  <p>
                    Open Chrome and go to <code>chrome://extensions</code>, enable Developer mode,
                    then click "Load unpacked" and select the extension folder
                  </p>
                  <button className={styles.helpButton} onClick={handleInstallInstructions}>
                    View Installation Guide
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.footer}>
            <p>Made with ❤️ for Chrome users</p>
            <p className={styles.footerNote}>
              This theme is inspired by Fountain.net's design. Not affiliated with Fountain.net.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

