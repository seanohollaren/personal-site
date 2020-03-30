'use strict';

const html = require('./site').html;

module.exports.hello = async (event) => {
  // you can grab things like queryParams, pathParams, etc off the `event` object

  // return static html
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    },
    body: html,
  };

  return response;
};
