import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./index.css";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
} from "@apollo/client";

import Home from "./Desktop/Pages/Home";
import Header from "./Desktop/Pages/Header";
import ProductDescriptionPage from "./Desktop/Pages/ProductDescriptionPage";
import CartBag from "./Desktop/Pages/CartBag";

const client = new ApolloClient({
    // uri: "https://48p1r2roz4.sse.codesandbox.io",
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

// const client = ...

client
    .query({
        // query: gql`
        //     query Get {
        //         rates(currency: "USD") {
        //             currency
        //         }
        //     }
        // `,

         query: gql`
            query GetCategories {
                categories {
                    name
                }
            }
        `,
    })
    
    .then((result) => console.log(result));

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h1>Header</h1>

            <h3>Test</h3>
        </div>
        {/* <BrowserRouter>
                <Header />
                <div className="layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category" element={<Home />} />
                        <Route
                            path="/pdp"
                            element={<ProductDescriptionPage />}
                        />
                        <Route path="/cart-bag" element={<CartBag />} />
                    </Routes>
                </div>
            </BrowserRouter> */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
