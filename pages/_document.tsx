import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@OllieMignot" />
          <meta property="og:url" content="https://oliverjames.dev" />
          <meta property="og:title" content="Oliver James Mignot" />

          <meta
            property="og:description"
            content="Personal site detailing my work, projects and products."
          />
          <meta
            property="og:image"
            content="https://www.oliverjames.dev/_next/image?url=%2Foj_light.png&w=1080&q=75"
          />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
