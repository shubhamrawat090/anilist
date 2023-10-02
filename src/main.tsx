import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "https://anilist-graphql.p.rapidapi.com/", // Replace with your GraphQL API URL
});

const authLink = setContext((_, { headers }) => {
  const rapidApiHost = import.meta.env.VITE_REACT_APP_RAPIDAPI_HOST;
  const rapidApiKey = import.meta.env.VITE_REACT_APP_RAPIDAPI_KEY;

  return {
    headers: {
      ...headers,
      "x-rapidapi-host": rapidApiHost,
      "x-rapidapi-key": rapidApiKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
