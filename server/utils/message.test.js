var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{
    //store res in variable
    //assert from match
    //assert createdAt is a number
    var from = 'yogesh';
    var text = 'hello';
    var res = generateMessage(from, text);
    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});
