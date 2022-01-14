import "./style.scss";

import { Component } from "react";

class SelectCurrencyMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null,
            currencies: null,
            currencies: ["$ USD", "€ EUR", "¥ JPY"],
        };
    }

    componentDidMount() {
        console.log(this.state.currencies);
    }

    handleSelectCurrency(value, index) {
        console.log(value, index);
    }



    render() {
        return (
            <div className="modal-wrapper">
            <ul className="change-currency" >
                {this.state.currencies.map( (currency, index) => <li
                        key={currency}
                        onClick={() =>
                            this.handleSelectCurrency(currency, index)
                        }
                    >{currency}</li>
                )}
            </ul>
            </div>
        );
    }
}

export default SelectCurrencyMenu;
