export const getStringPluralize = (str, num) => {
    if (num === 1) {
        return `${str}s`;
    }

    return str;
};