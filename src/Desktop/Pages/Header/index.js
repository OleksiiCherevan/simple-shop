import "./style.scss";
import { Component } from "react";

import HeaderNavItem from "../../Components/HeaderNavItem";
import Logo from "../../Components/Logo";
import Currency from "../../Components/Currency";
import Cart from "../../Components/Cart";
import { GetCategories } from "../../../assets/data";

export class Home extends Component {
    constructor(props) {
        super(props);

        this.categories = GetCategories();
    }
    render() {
        return (
            <header className="header">
                <div className="header__nav">
                    {this.categories.map((category) => (
                        <HeaderNavItem
                            key={category.name}
                            name={category.name}
                        ></HeaderNavItem>
                    ))}
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
