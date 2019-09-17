import { getRandomItem } from '../ItemsUtil';

describe('ItemsUtil test', () => {
    describe('getRandomItem() test', () => {
        it('should return 0 if passed 0', () => {
            const num = 1;
            expect(getRandomItem(num)).toEqual(0);
        });

        it('should return 0 if passed undefined', () => {
            const num = undefined;
            expect(getRandomItem(num)).toEqual(0);
        });

        it('should return 0 if passed null', () => {
            const num = null;
            expect(getRandomItem(num)).toEqual(0);
        });

        it('should return 0 if passed NaN', () => {
            const num = '1';
            expect(getRandomItem(num)).toEqual(0);
        });

        it('should return a number lesser than the one passed', () => {
            const num = 5;
            expect(getRandomItem(num)).toBeLessThan(num);
        });
    });
});