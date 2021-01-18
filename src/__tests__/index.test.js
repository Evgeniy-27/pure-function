/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import health from '../index.js';

test('health = 100', () => {
  expect(health({ name: 'Маг', health: 100 })).toBe('healthy');
});

test('health = 51', () => {
  expect(health({ name: 'Маг', health: 51 })).toBe('healthy');
});

test('health = 50', () => {
  expect(health({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('health = 49', () => {
  expect(health({ name: 'Маг', health: 49 })).toBe('wounded');
});

test('health = 30', () => {
  expect(health({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('health = 16', () => {
  expect(health({ name: 'Маг', health: 16 })).toBe('wounded');
});

test('health = 15', () => {
  expect(health({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('health = 14', () => {
  expect(health({ name: 'Маг', health: 14 })).toBe('critical');
});

test('health = 7', () => {
  expect(health({ name: 'Маг', health: 7 })).toBe('critical');
});

test('health = 0', () => {
  expect(health({ name: 'Маг', health: 0 })).toBe('critical');
});
