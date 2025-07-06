import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./provider/app-context-provider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppContextProvider>
  </StrictMode>
);
