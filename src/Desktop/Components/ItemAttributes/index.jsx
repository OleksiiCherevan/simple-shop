import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    setAttributes,
    updateAttributes,
} from "../../../store/productAttributesSlice";

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
    const { product, parent, index, onAttributesChange } = { ...props };

    const { attributes, selectedAttributes } = { ...product };

    const [itemSelectedAttribute, setItemSelectedAttribute] = useState({})
 
    const [itemSelectedAttributes, setItemSelectedAttributes] = useState(
        selectedAttributes ?? getDefaultAttributes(attributes)
    );

    const onChangeAttribute = (attribute, value) => {
        setItemSelectedAttribute({attribute, value});
    };

    useEffect(() => {
        let a = { ...itemSelectedAttributes };
        a[itemSelectedAttribute.attribute] = itemSelectedAttribute.value;
        setItemSelectedAttributes(a)

    }, [itemSelectedAttribute]);

    useEffect(() => {
        if (typeof (onAttributesChange) === "function")
            onAttributesChange(itemSelectedAttributes)
    }, [itemSelectedAttributes]);

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
