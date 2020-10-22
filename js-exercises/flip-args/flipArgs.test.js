// write your own test
import { flipArgs } from './flipArgs';

describe('Flip Arguments', () => {
  it('Should return a array', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('should return reverse of argument array', () => {
    const argArray = flipArgs();
    expect(argArray()).toStrictEqual([]);
    expect(argArray(1, 2, 3)).toStrictEqual([3, 2, 1]);
    expect(argArray('a', 'b', 'c')).toStrictEqual(['c', 'b', 'a']);
  });
});
