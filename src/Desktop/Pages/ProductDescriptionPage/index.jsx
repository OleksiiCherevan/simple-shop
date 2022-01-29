import "./style.scss";

import { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReactImageMagnify from "react-image-magnify";

import {
    useQuery,
    gql,
} from "@apollo/client";

import ItemAttributes from "../../Components/ItemAttributes";
import ButtonPrimary from "../../Components/ButtonPrimary";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../store/productBagSlice";


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

    const dispatch = useDispatch();

    const [mainImage, setMainImage] = useState(null);
    const [product, setProduct] = useState(null);

    const currencyIndex = useSelector(
        (state) => state.currencyIndex.currencyIndex
    );

    const [selectedAttributes, setSelectedAttributes] = useState();

    useEffect(() => {
        if (product) {
            setMainImage(product.gallery[0]);
        }
    }, [product]);

    useEffect(() => {
        if (data) {
            setProduct(data.product);
        }
    }, [data]);

    const onAttributesChange = (attributes) => {
        setSelectedAttributes(attributes);
    };

    const onHandleBuyClick = () => {
        let newProd = {
            ...product,
            selectedAttributes,
            currencyIndex,
            count: 1,
        };

        dispatch(
            addProduct({
                product: newProd,
            })
        );
    };

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
                                width: 1200,
                                height: 1800,
                            },
                        }}
                    />
                </div>
            </div>

            <div className="pdp__about-right">
                <div className="pdp__product-brand">{product.brand}</div>
                <div className="pdp__product-name">{product.name}</div>

                <ItemAttributes
                    product={product}
                    parent={'pdp'}
                    onAttributesChange={onAttributesChange}
                ></ItemAttributes>

                <div className="pdp__price">
                    <div className="pdp__price-title">PRICE:</div>
                    <div className="pdp__price-value">
                        {`${product.prices[currencyIndex].currency.symbol} ${product.prices[currencyIndex].amount}`}
                    </div>
                </div>

                {/* <button className="pdp__add-to-cart" onClick={onHandleBuyClick}>ADD TO CART</button> */}
                <div className="pdp__add-to-cart-wrapper" onClick={onHandleBuyClick}>
                    <ButtonPrimary height='4rem' width="256px">ADD TO CART</ButtonPrimary>
                </div>
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
