import health from '../index.js';

test('healthStatus = healthy', () => {
  const data = { name: 'Маг', health: 90 };
  expect(health(data)).toBe('healthy');
});

test('healthStatus = wounded', () => {
  const data = { name: 'Маг', health: 40 };
  expect(health(data)).toBe('wounded');
});

test('healthStatus = critical', () => {
  const data = { name: 'Маг', health: 1 };
  expect(health(data)).toBe('critical');
});

test('healthStatus = dead', () => {
  const data = { name: 'Маг', health: 0 };
  expect(health(data)).toBe('dead');
});

test('healthStatus = dead', () => {
  const data = { name: 'Маг', health: -30 };
  expect(health(data)).toBe('dead');
});

test('health: string', () => {
  const data = { name: 'Маг', health: 'healthy' };
  expect(health(data)).toBe(null);
});

test('health = undefined', () => {
  const data = { name: 'Маг' };
  expect(health(data)).toBe(null);
});

test('name = undefined', () => {
  const data = { health: 90 };
  expect(health(data)).toBe(null);
});