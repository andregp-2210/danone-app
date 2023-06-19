import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Global, css } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clj079w9k0x5001t6afqp2lt2/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Global
        styles={css`
          * {
            font-family: "Inter", sans-serif;
          }
          body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
        `}
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>
);
