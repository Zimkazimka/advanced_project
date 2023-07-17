import { classNames } from './classNames';

describe('classNames', () => {
    test('only with first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class11';
        expect(classNames('someClass', {}, ['class1', 'class11'])).toBe(expected);
    });
    test('with modes', () => {
        const expected = 'someClass class1 class11 hovered blur';
        expect(classNames(
            'someClass',
            { hovered: true, blur: true },
            ['class1', 'class11'],
        )).toBe(expected);
    });
    test('with modes false', () => {
        const expected = 'someClass class1 class11 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, blur: false },
            ['class1', 'class11'],
        )).toBe(expected);
    });
    test('with modes undefined', () => {
        const expected = 'someClass class1 class11 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, blur: undefined },
            ['class1', 'class11'],
        )).toBe(expected);
    });
});
