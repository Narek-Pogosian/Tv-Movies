import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ShowDescriptiveGridProvider } from "./context/show-descriptive-grid.tsx";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShowDescriptiveGridProvider>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </ShowDescriptiveGridProvider>
  </React.StrictMode>
);
