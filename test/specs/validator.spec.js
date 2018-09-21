import { default as Validator } from '../../src/lib/validator';

describe('isEmpty test', () => {
  it('empty string should be true', () => {
    expect(Validator.isEmpty("")).toBe(true);
  });

  it('spaced empty string should be false', () => {
    expect(Validator.isEmpty(" ")).toBe(false);
  });

  it('number should be false', () => {
    expect(Validator.isEmpty(1)).toBe(false);
  });

  it('null should be true', () => {
    expect(Validator.isEmpty(null)).toBe(true);
  });

  it('undefined should be true', () => {
    expect(Validator.isEmpty(undefined)).toBe(true);
  });
});


describe('isEmail test', () => {
  it('x@x should be true', () => {
    expect(Validator.isEmail("x@x")).toBe(true);
  });

  it('x@ should be false', () => {
    expect(Validator.isEmail("x@")).toBe(false);
  });

  it('x@x.x should be true', () => {
    expect(Validator.isEmail("'x@x.x")).toBe(true);
  });

  it('x@x.x.x should be true', () => {
    expect(Validator.isEmail("'x@x.x.x")).toBe(true);
  });
});

describe('isPassword test', () => {
  it('password length not in range [8, 32] should be false', () => {
    expect(Validator.isPassword("1234567")).toBe(false);
  });
  it('password length in range [8, 32] should be true', () => {
    expect(Validator.isPassword("12345678")).toBe(true);
  });
});

// so boring...
describe('isValidateCode test', () => {
  it('code length is 6 should be true', () => {
    expect(Validator.isValidateCode("123456")).toBe(true);
  });
  it('code length is not 6 should be false', () => {
    expect(Validator.isValidateCode("12345678")).toBe(false);
    expect(Validator.isValidateCode("1234")).toBe(false);
  });
});

describe('isPhone test', () => {
  it('123456789 should be false', () => {
    expect(Validator.isPhone("123456789")).toBe(false);
  });

  it('23456789 should be false', () => {
    expect(Validator.isPhone("23456789")).toBe(false);
  });

  it('16868686868 should be false', () => {
    expect(Validator.isPhone("16868686868")).toBe(false);
  });

  it('13838383838 should be false', () => {
    expect(Validator.isPhone("13838383838")).toBe(true);
  });
});

// isNumber function is not a good one
describe('isNumber test', () => {
  it('1 should be true', () => {
    expect(Validator.isNumber(1)).toBe(true);
  });

  it('1.1 should be true', () => {
    expect(Validator.isNumber(1.1, true)).toBe(true);
  });
});

// isNumber function is not a good one
describe('isNumber negative number test', () => {
  it('-1.1 should be true', () => { // what? -1.1 is not a number?
    expect(Validator.isNumber(-1.1, true)).toBe(true);
  });
});