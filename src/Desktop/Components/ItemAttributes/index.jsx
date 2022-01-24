import "./style.scss";

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ItemAttribute from "../ItemAttribute/indes";
import ItemAttributeSize from "../../Components/ItemAttributeSize/indes";
import ItemAttributeColor from "../../Components/ItemAttributeColor/indes";

const ItemAttributes = (props) => {
    const { attributes } = { ...props };
    const [tempAttributes, setTempAttributes] = useState([]);

    useEffect(() => {
        console.log(attributes);
    }, [attributes]);

    const onAttributeChange = (event, items, id) => {
        let value = event.target.value;

        let newTempAttribute = {
            selectedAttributes: {
                id: {
                    value,
                },
            },
        };

        setTempAttributes([...tempAttributes, newTempAttribute]);

        console.log(tempAttributes);
    };

    return (
        <div className="item__attributes">
            {attributes.map((attribute) => {
                return (
                    <div key={attribute.id}>
                        <div className="item__attributes-title">
                            {attribute.id}
                        </div>

                        <div
                            className="item__attributes-attributes"
                            onChange={(event) => {
                                onAttributeChange(
                                    event,
                                    attribute,
                                    attribute.id
                                );
                            }}
                        >
                            {attribute.items.map((item) => {
                                return attribute.id == "Color" ? (
                                    <ItemAttributeColor
                                        key={item.displayValue}
                                        id={attribute.id}
                                        name={item.id}
                                        isActive={true}
                                    />
                                ) : attribute.id == "Size" ? (
                                    <ItemAttributeSize
                                        key={item.displayValue}
                                        id={attribute.id}
                                        name={item.value}
                                        isActive={true}
                                    ></ItemAttributeSize>
                                ) : (
                                    <ItemAttribute
                                        key={item.displayValue}
                                        id={attribute.id}
                                        name={item.displayValue}
                                        isActive={true}
                                    ></ItemAttribute>
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
