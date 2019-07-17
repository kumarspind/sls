'use strict';
const moment = require('moment');
module.exports.logger = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless v1.0! Your function executed successfully!',
        version: "V 0.1",
	timestamp: moment().unix()
      })
  };

};
