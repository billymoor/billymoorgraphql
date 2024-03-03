# Data Validation Library

This is a simple data validation library for JavaScript, allowing you to validate various types of data such as email addresses, phone numbers, URLs, and custom patterns.

## Installation

You can install this library via npm:

```bash
npm install your-package-name
```

## Usage

First, import the `validate` function from the package:

```javascript
const validate = require('your-package-name');
```

Then, use the `validate` function to validate data:

```javascript
// Example usage
const isValidEmail = validate('example@email.com', 'email');
console.log(isValidEmail); // Output: true

const isValidPhoneNumber = validate('+1234567890', 'phoneNumber');
console.log(isValidPhoneNumber); // Output: true

const isValidURL = validate('https://www.example.com', 'url');
console.log(isValidURL); // Output: true

const isValidCustom = validate('custom_value', 'custom', '^custom');
console.log(isValidCustom); // Output: true
```

## API

### `validate(value, type, customRegex)`

- `value`: The value to be validated.
- `type`: The type of validation to perform. Supported types are: `'email'`, `'phoneNumber'`, `'url'`, and `'custom'`.
- `customRegex` (optional): A custom regular expression string for custom validation.

Returns `true` if the value passes validation, and `false` otherwise.

## Supported Validation Types

- **Email**: Validates email addresses.
- **Phone Number**: Validates phone numbers (supports international format).
- **URL**: Validates URLs.
- **Custom**: Validates data against a custom regular expression.

## Examples

```javascript
const isValidEmail = validate('example@email.com', 'email');
console.log(isValidEmail); // Output: true

const isValidPhoneNumber = validate('+1234567890', 'phoneNumber');
console.log(isValidPhoneNumber); // Output: true

const isValidURL = validate('https://www.example.com', 'url');
console.log(isValidURL); // Output: true

const isValidCustom = validate('custom_value', 'custom', '^custom');
console.log(isValidCustom); // Output: true
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
