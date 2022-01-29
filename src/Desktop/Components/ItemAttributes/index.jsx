import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    setAttributes,
    updateAttributes,
} from "../../../store/productAttributesSlice";

import ItemAttribute from "../ItemAttribute/indes";
import { getDefaultAttributes } from "../../../assets/utils";


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
        let oldAttributes = { ...itemSelectedAttributes };
        oldAttributes[itemSelectedAttribute.attribute] = itemSelectedAttribute.value;
        setItemSelectedAttributes(oldAttributes)
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
