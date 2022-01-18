import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

import Home from "./Desktop/Pages/Home";
import Header from "./Desktop/Pages/Header";
import ProductDescriptionPage from "./Desktop/Pages/ProductDescriptionPage";
import CartBag from "./Desktop/Pages/CartBag";

ReactDOM.render(
    <React.StrictMode>
        <div className="layout">
            <Header />
            {/* <Home /> */}
            {/* <ProductDescriptionPage></ProductDescriptionPage> */}
            <CartBag ></CartBag>
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
