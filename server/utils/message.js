var moment = require('moment');

var generateMessage = (from, text)=> {
  return {
    from,
    text,
    createdAt: moment().unix()
  }
};

var generateLocationMessage = (from, latitude, longitude)=> {
  return {
    from,
    url: `http://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().unix()
  }
};

module.exports = {
  generateMessage,
  generateLocationMessage
};
