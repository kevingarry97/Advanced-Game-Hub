import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import theme from "./theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       cacheTime: 300_000, // 5min
//       staleTime: 10 * 1000, // How long data is considered fresh
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false
//     }
//   }
// });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={route} />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
