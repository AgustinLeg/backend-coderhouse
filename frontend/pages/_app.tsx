import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import { CartProvider, AuthProvider } from "../context";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
