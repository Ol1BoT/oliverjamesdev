import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/rubik";
import "@fontsource/raleway";

import MainPage from "../components/Main";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainPage>
        <Component {...pageProps} />
      </MainPage>
    </ChakraProvider>
  );
}

export default MyApp;
