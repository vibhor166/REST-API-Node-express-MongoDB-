const { fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math');

test('should convert fahrenheit to celsius', () => {
  const answer = fahrenheitToCelsius(32);
  expect(answer).toBe(0);
});

test(' Should convert 0 C to 32 F', () => {
  const answer = celsiusToFahrenheit(0);
  expect(answer).toBe(32);
});
