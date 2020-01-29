import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <style>
              {
                `
                  body {
                    box-sizing: border-box;
                    margin: 0;
                    height: 100vh;
                    width: 100vw;
                  }
                  
                  #__next {
                    height: 100%;
                    width: 100%;
                  }
                `
              }
            </style>
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}