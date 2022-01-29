import "./style.scss";
import { Component, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
                    <Content />
                </div>
            </>
        );
    }
}

const Content = () => {
    let { category } = useParams();

    if (!category) category = "all";

    const PRODUCTS_FROM_NAME_QUERY = gql` 
        query getCategories {
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
    }`;

    const { loading, error, data } = useQuery(PRODUCTS_FROM_NAME_QUERY);

    if (loading) return <div>Loading</div>;
    if (error) return <div>Error</div>;

    return (
        <>
            <Title>Category: {category}</Title>

            <div className="home__content-wrapper">
                {data.category.products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        directTo={`/product/${product.id}`}
                    />
                ))}
            </div>
        </>
    );
};
export default Home;
