var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', ()=>{
  it('should generate correct location object', ()=>{
    var from = 'yogesh';
    var longitude = 12;
    var latitude = 13;
    var res = generateLocationMessage(from, latitude, longitude);
    expect(res).toInclude({from, url:'http://www.google.com/maps?q=13,12'});
    expect(res.createdAt).toBeA('number');
  });
});
