import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import axios from "axios";

import "../styles/globals.css";

axios.defaults.baseURL = "http://127.0.0.1:3000/api";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
