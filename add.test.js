const add = require('./add.js');
test('The add method', function() {
  expect(add(1,2)).toBe(3);
});
