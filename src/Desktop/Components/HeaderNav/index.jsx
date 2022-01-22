import './style.scss'

import { Link } from "react-router-dom";
import { useEffect } from "react";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";

import HeaderNavItem from "../HeaderNavItem";

// checked 
const HeaderNav = () => {
    const CATEGORIES_QUERY = gql`
        query GetQueries {
            categories {
                name
            }
        }
    `;
    
    const { loading, error, data } = useQuery(CATEGORIES_QUERY);

    if (loading) return <div>Loading....</div>;

    if(error) return <div>Error...</div>
    
    return (
        <div className="header-nav">
            {data.categories.map((category) => (
                <Link key={category.name} className='header-nav__link' to={"/category/" + category.name}>
                    <HeaderNavItem
                        key={category.name}
                        name={category.name}
                    ></HeaderNavItem>
                </Link>
            ))}
        </div>
    );
};

export default HeaderNav