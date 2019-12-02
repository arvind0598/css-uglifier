import { generateClassName } from '../src/utils/remapClasses';

describe('testing generation of class names', () => {
  test('sending 0 returns a', () => {
    const result = generateClassName(0);
    expect(result).toBe('a');
  });

  test('sending 25 returns z', () => {
    const result = generateClassName(25);
    expect(result).toBe('z');
  });

  test('sending 26 returns A', () => {
    const result = generateClassName(26);
    expect(result).toBe('A');
  });

  test('sending 51 returns Z', () => {
    const result = generateClassName(51);
    expect(result).toBe('Z');
  });

  test('sending 52 returns aa', () => {
    const result = generateClassName(52);
    expect(result).toBe('aa');
  });

  test('sending 123 returns tc', () => {
    const result = generateClassName(123);
    expect(result).toBe('tb');
  });
});
