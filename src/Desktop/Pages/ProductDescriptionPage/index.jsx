import "./style.scss";

import { Component } from "react";

import ProductA from "./../../../assets/images/product-images/Product-A.png";
import ProductB from "./../../../assets/images/product-images/Product-B.png";

import ReactImageMagnify from "react-image-magnify";
import ItemAttributes from "../../Components/ItemAttributes/indes";

let products = [ProductA, ProductB];

class ProductDescriptionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImage: null,
        };

        // this.onHandleHover = this.onHandleHover.bind(this)
    }

    componentDidMount() {
        this.setState({
            selectedImage: products.length > 0 ? products[0] : null,
        });
    }

    onHandleHover(event, index) {
        console.log(index);
        console.log(this.state.selectedImage);

        this.setState({
            selectedImage: products[index],
        });
    }

    render() {
        return (
            <div className="pdp">
                <div className="pdp__gallery">
                    <div className="pdp__thumbnails">
                        {products.map((product, index) => {
                            return (
                                <img
                                    className="pdp__thumbnail-picture"
                                    src={product}
                                    onMouseEnter={(event) =>
                                        this.onHandleHover(event, index)
                                    }
                                ></img>
                            );
                        })}
                    </div>

                    <div className="pdp__main-image">
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    src: this.state.selectedImage,
                                    isFluidWidth: true,
                                },
                                largeImage: {
                                    src: this.state.selectedImage,
                                    width: 2000,
                                    height: 2000,
                                },
                            }}
                        />
                    </div>
                </div>

                <div className="pdp__about-right">
                    <div className="pdp__product-name">Apollo</div>
                    <div className="pdp__short-description">Running Short</div>

                    <div className="pdp__attribute">
                        <div className="pdp__attribute-title">SIZE:</div>
                        <div className="pdp__attribute-attributes">
                            {[1, 2, 3, 4].map((item) => {
                                return (
                                    <ItemAttributes
                                        key={item}
                                        height={45}
                                        width={55}
                                        title={"attribute"}
                                        name={item}
                                        isActive={true}
                                    ></ItemAttributes>
                                );
                            })}
                        </div>
                    </div>

                    <div className="pdp__price">
                        <div className="pdp__price-title">PRICE:</div>
                        <div className="pdp__price-value">{'$'}{' '}{50.12}</div>
                    </div>

                    <button className="pdp__add-to-cart">ADD TO CART</button>

                    <div className="pdp__main-description">
                        {
                            <p>
                                Find stunning women's cocktail dresses and party
                                dresses. <b>Stand out in lace</b> and metallic cocktail
                                dresses and party dresses from all your favorite
                                brands.
                            </p>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDescriptionPage;
