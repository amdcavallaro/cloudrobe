export const getRandomItem = (num) => {
    if (num === undefined || isNaN(num)) {
        return 0;
    }
    return Math.floor(Math.random() * Math.floor(num));
}