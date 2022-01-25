import "./style.scss";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    addAttributes,
    clearAttributes,
    setAttributes,
} from "../../../store/productAttributesSlice";

import ItemAttribute from "../ItemAttribute/indes";
import ItemAttributeSize from "../../Components/ItemAttributeSize/indes";
import ItemAttributeColor from "../../Components/ItemAttributeColor/indes";

const getDefaultAttributes = (attributes) => {
    let resAttributes = {};
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        resAttributes[attribute.id] = attribute.items[0].id;
    }
    return resAttributes;
};

const ItemAttributes = (props) => {
    const product = props.product;
    const { attributes } = { ...product };
    const dispatch = useDispatch();

    const [selectedAttributes, setSelectedAttributes] = useState(
        getDefaultAttributes(attributes)
    );

    useEffect(() => {
        return () => {
            dispatch(
                setAttributes({
                    attributes: selectedAttributes,
                })
            );
            dispatch(clearAttributes());
        };
    }, []);

    const onChagneAttribute = (attribute, value) => {
        let newAttributes = { ...selectedAttributes };
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
                                    selectedAttributes[attribute.id];
                                return (
                                    <div
                                        key={item.id + selectedAttribute}
                                        onClick={() =>
                                            onChagneAttribute(
                                                attribute.id,
                                                item.id
                                            )
                                        }
                                    >
                                        {attribute.id == "Color" ? (
                                            <ItemAttributeColor
                                                attribute={attribute.id}
                                                id={item.id}
                                                value={item.value}
                                                isChecked={
                                                    item.id ===
                                                    selectedAttribute
                                                }
                                            />
                                        ) : attribute.id == "Size" ? (
                                            <ItemAttributeSize
                                                attribute={attribute.id}
                                                id={item.id}
                                                value={item.value}
                                                isChecked={
                                                    item.id ===
                                                    selectedAttribute
                                                }
                                            ></ItemAttributeSize>
                                        ) : (
                                            <ItemAttribute
                                                attribute={attribute.id}
                                                id={item.id}
                                                value={item.value}
                                                isChecked={
                                                    item.id ===
                                                    selectedAttribute
                                                }
                                            ></ItemAttribute>
                                        )}
                                    </div>
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
