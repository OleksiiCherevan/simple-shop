import "./style.scss";
import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../Components/ProductCard";
import Title from "../../Components/Title";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";

// I don`t know how to do it correctly yet...
// So i decide to use power of string =)

export class Home extends Component {
    constructor(props) {
        super(props);

        
    }

    render() {
        return (
            <>
                <div className="home">
                    <Title>Category: {}</Title>

                    <Content />
                </div>
            </>
        );
    }
}

const Content = ({parentCategory="all"}) => {
    let { category } = useParams();
    if (!category) category = parentCategory;

    const PRODUCTS_FROM_NAME_QUERY = gql` 
query getProduct {
    category(input: { title:"${category}" }) {
        name
        products {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
            id
            displayValue
            value
        }
    }
    prices {
        currency {
        label
        symbol
        }
        amount
    }
    brand

    }
  }
}
`;
    const { loading, error, data } = useQuery(PRODUCTS_FROM_NAME_QUERY);
    console.log(data.category.products);
    if(loading)
        return <div>Loading</div>
    if(error)
        return <div>Error</div>

    return (
        <div className="home__content-wrapper">
           {data.category.products.map((product) => (
                      <ProductCard key={product.id} {...product} isAvailable={true} />
                  ))}
        </div>
    );
};
export default Home;
