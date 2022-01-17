import './style.scss'

import { Component } from 'react'

import ProductA from './../../../assets/images/product-images/Product-A.png'
import ProductB from './../../../assets/images/product-images/Product-B.png'
import Zoom from 'react-img-zoom'

let products = [
    ProductA,
    ProductB
]


class ProductDescriptionPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className='pdp'>
            <div className='pdp__image'>
                <div className='pdp__small-images'>
                    {products.map(product => {
                        <img width={50} height={50} src={product}></img>
                    }) }
                </div>
                <div className='pdp__big-image'>
                    <img></img>
                </div>
            </div>


            <div className='pdp__control'></div>
        </div>)
    }
}

export default ProductDescriptionPage