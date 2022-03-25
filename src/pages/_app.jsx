import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import theme from "../theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
        <NextNProgress height={6} color="#f4364c" />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
