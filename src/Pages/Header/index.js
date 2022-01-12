import "./style.scss";
import { Component } from "react";

import HeaderItem from "../../Components/HeaderItem";
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
                        <HeaderItem
                            key={category.name}
                            name={category.name}
                        ></HeaderItem>
                    ))}
                </div>
                <div className="header__logo-wrapper">
                    <Logo />
                </div>

                <div className="header__actions">
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
