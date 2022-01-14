import "./style.scss";
import { Component } from "react";

class Currency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: "$",

            selected: null,
            currencies: ["$ USD", "€ EUR", "¥ JPY"],
        };

        this.showMenu = this.handleOpen.bind(this);
    }

    handleOpen(event) {
        this.setState({
            isOpen: true,
        });
    }

    render() {
        return (
            <div className="currency">
                <div className="currency__select-button">
                    <div className="icon">{this.state.icon}</div>

                    <div className="menu">
                        <svg
                            className="arrow_up arrow"
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

                <ul className="currency__menu">
                    {this.state.currencies.map((currency, index) => (
                        <li
                            key={currency}
                            onClick={() => this.handleCurrency(currency, index)}
                        >
                            {currency}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Currency;