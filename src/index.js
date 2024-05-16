import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "./shared/socket/SocketContext";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SocketProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: `1px solid red`,
              color: "#F48901",
              fontSize: "15px",
              marginTop: "100px",
              borderRadius: "50px",
              // background: "#F48901",
            },
          }}
          limit={1}
        />
      </BrowserRouter>
    </QueryClientProvider>
  </SocketProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
