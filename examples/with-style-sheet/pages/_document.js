import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 }`}</style>
          <link id='__style_sheet_extracted__' rel='stylesheet' href='/_next/static/bundle.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
