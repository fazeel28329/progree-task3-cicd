const test = require('node:test');
const assert = require('node:assert/strict');
const { getMessage } = require('./app');

test('Application returns correct message', () => {
  assert.equal(
    getMessage(),
    'Progree Task 3 - CI/CD Pipeline Running!'
  );
});

test('Application message is a string', () => {
  assert.equal(typeof getMessage(), 'string');
});

test('Application message is not empty', () => {
  assert.ok(getMessage().length > 0);
});
