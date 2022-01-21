import "./style.scss";
import { Component, useEffect } from "react";
import { Link } from "react-router-dom";

import HeaderNavItem from "../../Components/HeaderNavItem";
import Logo from "../../Components/Logo";
import Currency from "../../Components/Currency";
import Cart from "../../Components/Cart";
import HeaderNav from "../../Components/HeaderNav";


import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";

export class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <div className="header__nav-wrapper">
                    <HeaderNav />
                </div>
                <div className="header__logo-wrapper">
                    <Logo />
                </div>

                <div className="header__actions">
                    <div className="header__currency-wrapper">
                        <Currency />
                    </div>

                    <div className="header__cart-wrapper">
                        <Cart />
                    </div>
                </div>
            </header>
        );
    }
}

export default Home;
