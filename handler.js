'use strict';

const html = require('./site').html;

module.exports.hello = (event, context, callback) => {
  
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    },
    body: html,
  };

  callback(null, response);
};
