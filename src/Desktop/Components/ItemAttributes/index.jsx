import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAttributes, updateAttributes } from "../../../store/productAttributesSlice";

import ItemAttribute from "../ItemAttribute/indes";
import { useSelector } from "react-redux";
const getDefaultAttributes = (attributes) => {
    let resAttributes = {};
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        resAttributes[attribute.id] = attribute.items[0].id;
    }
    return resAttributes;
};

const ItemAttributes = (props) => {
    const {product, parent, index} = {...props};

    const { attributes, selectedAttributes } = { ...product };
    const dispatch = useDispatch();

    const [itemSelectedAttributes, setItemSelectedAttributes] = useState({}) 
    
    const storeSelectedAttributes = useSelector(state =>  {
        let stateSelectedAttributes = state.productAttributes.attributes;
        console.log(stateSelectedAttributes);

        if(Object.keys(stateSelectedAttributes).length === 0) {
            dispatch(
                setAttributes({
                    attributes: getDefaultAttributes(attributes)
                })
            )
        } 

        return stateSelectedAttributes
    }) 

    useEffect(() => {
        console.log(storeSelectedAttributes)
        setItemSelectedAttributes(storeSelectedAttributes)
    }, [storeSelectedAttributes]);

    const onChangeAttribute = (attribute, value) => {
        dispatch(
            updateAttributes({
                attribute: attribute,
                value: value,
            })
        );
    };

    return (
        <div className="item__attributes">
            {attributes.map((attribute) => {
                return (
                    <div key={attribute.id}>
                        <div className="item__attributes-title">
                            {attribute.id}
                        </div>

                        <div className="item__attributes-attributes">
                            {attribute.items.map((item) => {
                                const selectedAttribute =
                                itemSelectedAttributes[attribute.id];
                                return (
                                        <ItemAttribute
                                            key={item.id + selectedAttribute}
                                            onClick={onChangeAttribute}
                                            attribute={attribute.id}
                                            id={item.id}
                                            value={item.value}
                                            parent={parent}
                                            index={index}
                                            isChecked={
                                                item.id === selectedAttribute
                                            }
                                        />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemAttributes;
