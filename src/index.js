import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Home from "./Desktop/Pages/Home";
import Header from "./Desktop/Pages/Header";
import ProductDescriptionPage from "./Desktop/Pages/ProductDescriptionPage";
import CartBag from "./Desktop/Pages/CartBag";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Header />
                <div className="layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:category" element={<Home />} />
                        <Route
                            path="/product/:id"
                            element={<ProductDescriptionPage />}
                        />
                        <Route path="/cart-bag" element={<CartBag />} />
                    </Routes>
                </div>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
