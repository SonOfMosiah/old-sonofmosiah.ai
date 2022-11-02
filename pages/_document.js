import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/octicons/2.0.2/octicons.min.css"
            rel="stylesheet"
          />

          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta
            name="description"
            content="Son of Mosiah - Software Developer from Lehi, Utah"
          />
          <meta property="og:url" content="https://sonofmosiah.ai" />
          <meta property="og:site_name" content="sonofmosiah.ai" />
          <meta property="og:image" content="/img/smol-spider.png" />
          <meta name="theme-color" content="#000000" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:image" content="https://sonofmosiah.ai/img/smol-spider.png" />
        </Head>
        <body className="text-black bg-white dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument
