import "./style.scss";
import { Component, useEffect } from "react";

import ProductCard from "../../Components/ProductCard";
import Title from "../../Components/Title";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

const CATEGORIES_QUERY = gql`
query GetQueries {
  categories {
   name
  }
}
`;

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

                   <Content />
                </div>
            </>
        );
    }
}

const Content =()=> {
    const {loadint, error, data} = useQuery(CATEGORIES_QUERY)

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className="home__content-wrapper">
        {[1, 2, 3, 4, 5, 6, 7].map((card) => {
            return (
                <ProductCard key={card} isAvailable={true} />
            );
        })}
    </div>
    )
}
export default Home;
