// validator.js

const validators = {
    email: (value) => {
      // Regular expression for validating email addresses
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    phoneNumber: (value) => {
      // Regular expression for validating phone numbers (supports international format)
      const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
      return phoneRegex.test(value);
    },
    url: (value) => {
      // Regular expression for validating URLs
      const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
      return urlRegex.test(value);
    },
    custom: (value, customRegex) => {
      // Custom validation using provided regular expression
      const regex = new RegExp(customRegex);
      return regex.test(value);
    }
  };
  
  const validate = (value, type, customRegex) => {
    if (!value) return false; // Value is required
    if (!type || !validators[type]) return false; // Invalid validation type
  
    if (type === 'custom' && customRegex) {
      return validators[type](value, customRegex);
    } else {
      return validators[type](value);
    }
  };
  
  module.exports = validate;
  