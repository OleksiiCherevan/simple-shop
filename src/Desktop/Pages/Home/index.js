import "./style.scss";
import { Component } from "react";

import ProductCard from "../../Components/ProductCard";
import Title from "../../Components/Title";

// const CATEGORIES = gql`
// {
//   Categories {
//    name
//   }
// }
// `;

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: null,

            loading: true,
            error: null,
            data: null
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className="home">
                    <Title>Category: {"All"}</Title>

                    {/* <Query query={CATEGORIES}>
                        {({loading, data})=> {
                            console.log(data)
                        }}
                    </Query> */}

                    <div className="home__content-wrapper">
                        {[1, 2, 3, 4, 5, 6, 7].map((card) => {
                            return (
                                <ProductCard key={card} isAvailable={true} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
