import "./style.scss";

import { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductA from "./../../../assets/images/product-images/Product-A.png";
import ProductB from "./../../../assets/images/product-images/Product-B.png";

import ReactImageMagnify from "react-image-magnify";
import ItemAttributes from "../../Components/ItemAttributes/indes";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from "@apollo/client";

// let products = [ProductA, ProductB];

// class ProductDescriptionPage extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedImage: null,
//         };
//     }

//     componentDidMount() {
//         this.setState({
//             selectedImage: products.length > 0 ? products[0] : null,
//         });
//     }

//     onHandleHover(event, index) {
//         this.setState({
//             selectedImage: products[index],
//         });
//     }

//     render() {
//         return (
//             <div className="pdp">
//                 <div className="pdp__gallery">
//                     <div className="pdp__thumbnails">
//                         {products.map((product, index) => {
//                             return (
//                                 <img
//                                     className="pdp__thumbnail-picture"
//                                     src={product}
//                                     onMouseEnter={(event) =>
//                                         this.onHandleHover(event, index)
//                                     }
//                                 ></img>
//                             );
//                         })}
//                     </div>

//                     <div className="pdp__main-image">
//                         <ReactImageMagnify
//                             {...{
//                                 smallImage: {
//                                     src: this.state.selectedImage,
//                                     isFluidWidth: true,
//                                 },
//                                 largeImage: {
//                                     src: this.state.selectedImage,
//                                     width: 2000,
//                                     height: 2000,
//                                 },
//                             }}
//                         />
//                     </div>
//                 </div>

//                 <div className="pdp__about-right">
//                     <div className="pdp__product-brand">Apollo</div>
//                     <div className="pdp__product-name">Running Short</div>

//                     <div className="pdp__attribute">
//                         <div className="pdp__attribute-title">SIZE:</div>
//                         <div className="pdp__attribute-attributes">
//                             {[1, 2, 3, 4].map((item) => {
//                                 return (
//                                     <ItemAttributes
//                                         key={item}
//                                         height={45}
//                                         width={55}
//                                         title={"attribute"}
//                                         name={item}
//                                         isActive={true}
//                                     ></ItemAttributes>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     <div className="pdp__price">
//                         <div className="pdp__price-title">PRICE:</div>
//                         <div className="pdp__price-value">
//                             {"$"} {50.12}
//                         </div>
//                     </div>

//                     <button className="pdp__add-to-cart">ADD TO CART</button>

//                     <div className="pdp__main-description">
//                         {
//                             <p>
//                                 Find stunning women's cocktail dresses and party
//                                 dresses. <b>Stand out in lace</b> and metallic
//                                 cocktail dresses and party dresses from all your
//                                 favorite brands.
//                             </p>
//                         }
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const ProductDescriptionPageFunc = () => {
    let priceId = 1;

    let { id } = useParams();

    const PRODUCT_FROM_ID = gql`
        query getProduct {
            product(id: "${id}") {
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
    `;
    const { loading, error, data } = useQuery(PRODUCT_FROM_ID);

    const [mainImage, setMainImage] = useState(null);
    const [product, setProduct] = useState(null);

    const [currencyIndex, setCurrencyIndex] = useState(
        localStorage.getItem("currencyIndex") | 0
    );

    useEffect(() => {
        if (data) {
            setProduct(data.product);
        }
    }, [data]);

    useEffect(() => {
        if(product) {
            setMainImage(product.gallery[0])
        }
    }, [product])
    const onHandleHover = (event, index) => {
        setMainImage(product.gallery[index]);
    };

    if (loading || !product) return <div>Loading</div>;

    if (error) return <div>Error</div>;

    return (
        <div className="pdp">
            <div className="pdp__gallery">
                <div className="pdp__thumbnails">
                    {product.gallery.map((thumbnail, index) => {
                        return (
                            <img
                                key={index}
                                className="pdp__thumbnail-picture"
                                src={thumbnail}
                                onMouseEnter={(event) =>
                                    onHandleHover(event, index)
                                }
                            ></img>
                        );
                    })}
                </div>

                <div className="pdp__main-image">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                src: mainImage,
                                isFluidWidth: true,

                            },
                            largeImage: {
                                src: mainImage,
                                width: 2000,
                                height: 2000,
                            },
                        }}
                    />
                </div>
            </div>

            <div className="pdp__about-right">
                <div className="pdp__product-brand">{product.brand}</div>
                <div className="pdp__product-name">{product.name}</div>

                <div className="pdp__attribute">
                    {product.attributes.map((attribute) => {
                        return (
                            <div>
                                <div className="pdp__attribute-title">
                                    {attribute.id}
                                </div>

                                <div className="pdp__attribute-attributes">
                                    {attribute.items.map((item) => (
                                        <ItemAttributes
                                            key={item.displayValue}
                                            height={45}
                                            width={55}
                                            id={attribute.id}
                                            name={item.id}
                                            isActive={true}
                                        ></ItemAttributes>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="pdp__price">
                    <div className="pdp__price-title">PRICE:</div>
                    <div className="pdp__price-value">
                        {`${product.prices[currencyIndex].currency.symbol} ${product.prices[currencyIndex].amount}`}
                    </div>
                </div>

                <button className="pdp__add-to-cart">ADD TO CART</button>

                <div className="pdp__main-description">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescriptionPageFunc;
