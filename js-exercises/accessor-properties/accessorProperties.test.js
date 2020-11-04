import { accessorProperties } from './accessorProperties';

describe('Accessor Properties Function Test', () => {
  test('Should return a binary number', () => {
    const obj = accessorProperties();
    obj.number = 36;
    console.log('Number Is', obj.number);
    expect(obj.number).toBe(100100);
  });
});
