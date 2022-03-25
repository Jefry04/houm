import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Navbar from "../components/Navbar";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const showNavbar = router.pathname !== "/";
  return (
    <>
      {showNavbar ? (
        <ChakraProvider theme={theme}>
          <Navbar />
          <NextNProgress height={6} color="#f4364c" />
          <Component {...pageProps} />
        </ChakraProvider>
      ) : (
        <ChakraProvider theme={theme}>
          <NextNProgress height={6} color="#f4364c" />
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;
