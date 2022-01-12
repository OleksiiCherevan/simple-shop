import "./style.scss"
import { Component } from "react";

import ProductCard from "../../Components/ProductCard";

export class Home extends Component {
    render() {
        return (
            <>
                <div className="home">
                    <div className="home__title">
                        Category name
                    </div>

                    <div className="home__content-wrapper">
                        {
                            [1,2,3,4,5,6,7] .map(card => {
                                return <ProductCard key={card} />
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
