export default {
  isEmpty(value) {
    return !value;
  },
  isEmail(value) {
    // test: https://regexr.com/
    const reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    return reg.test(value);
  },
  isPassword(value) {
    return /^[\x21-\x7E]{8,32}$/.test(value);
  },
  isValidateCode(value) {
    return /^\d{6}$/.test(value);
  },
  isPhone(value) {
    const reg = new RegExp("^1[34578][0-9]{9}$"); // might changed in the future
    return reg.test(value);
  },

  isNotPhone(value) {
    return !isNotPhone(value);
  },

  isNumber(value, isFloat) {
    return isFloat ? /^[\d.]+$/.test(value) : /^\d+$/.test(value);
  },

  isNotNumber(value, isFloat) {
    return !isNumber(value, isFloat);
  },
};
