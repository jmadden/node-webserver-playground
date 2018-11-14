exports.handler = function(event, context, callback) {
  const twilio = require('twilio')(acct_sid, auth_token);
  twilio.fax.faxes.create({
    from: '+17205730662',
    to: '+17205730662',
    mediaUrl: 'https://s3-us-west-2.amazonaws.com/hellofax/test.pdf'
  }, function(err, result) {
    console.log('fax: ' result.fax);
    callback();
  });
}