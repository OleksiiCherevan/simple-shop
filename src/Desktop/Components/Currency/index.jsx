import "./style.scss";
// import { Component } from "react";
import { useState } from "react/cjs/react.development";

import {
    useQuery,
    gql,
} from "@apollo/client";

// at first i`m trying to use class but then i found a better way to work with graphal with useQuery
// i prefer to use a better instrument for this element
// class Currency extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             icon: "$",

//             selected: null,
//             currencies: ["$ USD", "€ EUR", "¥ JPY"],
//             isOpen: false,
//         };

//         this.handleOpen = this.handleOpen.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//     }

//     handleOpen(event) {
//         this.setState({
//             isOpen: true,
//         });
//     }

//     handleClose(event) {
//         this.setState({
//             isOpen: false,
//         });
//     }

//     render() {
//         return (
//             <div
//                 className="currency"
//                 onMouseEnter={this.handleOpen}
//                 onMouseLeave={this.handleClose}
//             >
//                 <div className="currency__select-button">
//                     <div className="icon">{this.state.icon}</div>

//                     <div className="menu">
//                         <svg
//                             className={
//                                 this.state.isOpen ? "arrow_up arrow" : "arrow"
//                             }
//                             width="8"
//                             height="4"
//                             viewBox="0 0 8 4"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M1 0.5L4 3.5L7 0.5"
//                                 stroke="black"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </div>
//                 </div>

//                 <ul className="currency__menu">
//                     {this.state.currencies.map((currency, index) => (
//                         <li
//                             key={currency}
//                             onClick={() => this.handleCurrency(currency, index)}
//                         >
//                             {currency}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

const CurrencyFunc = () => {
    const CURRENCIES_QUERY = gql`
        query getCurrencies {
            currencies {
                label
                symbol
            }
        }
    `;

    const { loading, error, data } = useQuery(CURRENCIES_QUERY);

    const [isOpen, setIsOpen] = useState(false);

    const [currencyIndex, setCurrencyIndex] = useState(
        localStorage.getItem("currencyIndex") | 0
    );

    const onCurrencyChange = (currency, index) => {
        localStorage.setItem("currencyIndex", index);
        setCurrencyIndex(index);
        window.location.reload();
    };

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    return (
        <div
            className="currency"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="currency__select-button">
                <div className="icon">
                    {data.currencies[currencyIndex].symbol}
                </div>

                <div className="menu">
                    <svg
                        className={isOpen ? "arrow_up arrow" : "arrow"}
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
                {data.currencies.map((currency, index) => (
                    <li
                        key={currency.label}
                        onClick={() => {
                            onCurrencyChange(currency, index);
                        }}
                    >
                        {currency.label} {currency.symbol}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default CurrencyFunc;
