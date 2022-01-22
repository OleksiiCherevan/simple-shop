import "./style.scss";
import { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Components/Logo";
import Currency from "../../Components/Currency";
import HeaderCart from "../../Components/HeaderCart";
import HeaderNav from "../../Components/HeaderNav";


// checked
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
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>

                <div className="header__actions">
                    <div className="header__currency-wrapper">
                        <Currency />
                    </div>

                    <div className="header__header-cart-wrapper">
                        <HeaderCart />
                    </div>
                </div>
            </header>
        );
    }
}

export default Home;
