import "./style.scss";
import { Component } from "react";

import NavItem from "../../Components/NavItem";
import Logo from "../../Components/Logo";
import SelectCurrency from "../../Components/SelectCurrency";
import BasketButton from "../../Components/BasketButton";
import { GetCategories } from "../../assets/data";

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
                        <NavItem
                            key={category.name}
                            name={category.name}
                        ></NavItem>
                    ))}
                </div>
                <div className="header__logo-wrapper">
                    <Logo />
                </div>

                <div className="header__additional">
                    <div className="header__select-currency-wrapper">
                        <SelectCurrency />
                    </div>

                    <div className="header__basket-button-wrapper">
                        <BasketButton />
                    </div>
                </div>
            </header>
        );
    }
}

export default Home;
