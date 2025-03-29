import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './Context.jsx';
import './index.css';
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:1000*60*5,
    }
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </GlobalProvider>
);


