import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    setAttributes,
} from "../../../store/productAttributesSlice";

import ItemAttribute from "../ItemAttribute/indes";
const getDefaultAttributes = (attributes) => {
    let resAttributes = {};
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        resAttributes[attribute.id] = attribute.items[0].id;
    }
    return resAttributes;
};

const ItemAttributes = (props) => {
    // 

    const product = props.product;
    const { attributes, selectedAttributes } = { ...product };
    const dispatch = useDispatch();

    const [itemSelectedAttributes, setSelectedAttributes] = useState(
        selectedAttributes ?? getDefaultAttributes(attributes)
    );
    
    useEffect(() => {
        dispatch(
            setAttributes({
                attributes: itemSelectedAttributes,
            })
        );
    }, [itemSelectedAttributes]);

    const onChangeAttribute = (attribute, value) => {
        let newAttributes = { ...itemSelectedAttributes };
        newAttributes[attribute] = value;
        setSelectedAttributes(newAttributes);
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
