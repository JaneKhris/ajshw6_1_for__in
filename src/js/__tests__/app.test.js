import orderByProps from '../app';

test('function', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const arrayOrder = ['defence', 'attack'];
  const expected = [
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj, arrayOrder)).toEqual(expected);
});
