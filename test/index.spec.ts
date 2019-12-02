import { Greeter, AnotherGreeter } from '../src';

test('greet arvind', () => {
  const result = Greeter('Arvind');
  expect(result).toBe('Hello Arvind!');
});

test('bye to arvind', () => {
  const result = AnotherGreeter('Arvind');
  expect(result).toBe('Bye Arvind!');
});
