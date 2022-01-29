
const getDefaultAttributes = (attributes) => {
    let resAttributes = {};
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        resAttributes[attribute.id] = attribute.items[0].id;
    }
    return resAttributes;
};

export {getDefaultAttributes}