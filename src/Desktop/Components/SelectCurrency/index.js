import "./style.scss";
import { Component } from "react";

import SelectCurrencyMenu from "../SelectCurrencyMenu";

class SelectCurrency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: "$",
            isOpen: false,
            menu: null,
        };
    }

    componentDidUpdate() {}

    onOpenMenuClick(event) {
        this.isOpen = !this.isOpen;

        this.setState({
            menu: this.isOpen ? <SelectCurrencyMenu/> : null,
        });
    }

    render() {
        return (
            <div className="select-currency">
                <div
                    className="select-currency__select-button"
                    onClick={() => this.onOpenMenuClick()}
                >
                    <div className="icon">{this.state.icon}</div>

                    <div className="menu">
                        <svg
                            width="8"
                            height="4"
                            viewBox="0 0 8 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 0.5L4 3.5L7 0.5"
                                stroke="black"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                {this.state.menu}
            </div>
        );
    }
}

export default SelectCurrency;
