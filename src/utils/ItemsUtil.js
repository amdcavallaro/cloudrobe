export const getStringPluralize = (str, num) => {
    if (num === 1) {
        return `${str}s`;
    }

    return str;
};

export const getClothesListByCategory = (list, category) => {
    if (category === 'view-all') {
        return [...list.map(element => element.content)].reduce((acc, content) => [...acc, ...content]);
    }
    return list.find(element => element.name === category).content;
};