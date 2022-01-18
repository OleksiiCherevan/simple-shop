import "./style.scss";

import { Component } from "react";

import ProductA from "./../../../assets/images/product-images/Product-A.png";
import ProductB from "./../../../assets/images/product-images/Product-B.png";

import ReactImageMagnify from "react-image-magnify";

let products = [ProductA, ProductB];

class ProductDescriptionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedImage: [],
        };

        // this.onHandleHover = this.onHandleHover.bind(this)
    }

    componentDidMount() {
        this.setState({
            selectedImage: products.length > 0 ? [products[0]] : null,
        });
    }

    onHandleHover(event, index) {
        console.log(index);
        console.log(this.state.selectedImage);

        this.setState({
            selectedImage: [products[index]],
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
                        {this.state.selectedImage.map((image) => {
                            console.log(image);
                            return (
                                // <img src={image} alt="" className="pdp__big-image" />
                                // <Zoom height={500} width={500} zoomScale={3} img={image}></Zoom>
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            src: image,
                                            isFluidWidth: true,
                                        },
                                        largeImage: {
                                            src: image,
                                            width: 2000,
                                            height: 2000,
                                        },
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="pdp__control">
                    
                </div>
            </div>
        );
    }
}

export default ProductDescriptionPage;
