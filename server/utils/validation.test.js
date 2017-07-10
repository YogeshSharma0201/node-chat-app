const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation');

// isRealString
  // should reject non-string values
  // should reject string with only spaces
  //should allow string with non-space characters

describe('isRealString', ()=>{
  it('should reject non-string values', ()=>{
    expect(isRealString(234)).toBe(false);
  });

  it('should reject string with only spaces', ()=>{
    expect(isRealString('    ')).toBe(false);
  });

  it('should allow string with non-space characters', ()=>{
    expect(isRealString('  yogesh  ')).toBe(true);
  });
});
