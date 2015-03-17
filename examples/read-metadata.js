var nforce = require('nforce');
var _      = require('lodash');

require('../')(nforce);

var org = nforce.createConnection({
  clientId: '3MVG9rFJvQRVOvk5nd6A4swCyck.4BFLnjFuASqNZmmxzpQSFWSTe6lWQxtF3L5soyVLfjV3yBKkjcePAsPzi',
  clientSecret: '9154137956044345875',
  redirectUri: 'http://localhost:3000/oauth/_callback',
  mode: 'single',
  username: process.env.SFUSER,
  password: process.env.SFPASS,
  plugins: ['meta']
});

org.authenticate().then(function(){
  return org.meta.readMetadata({
    metadataType: 'CustomObject',
    fullNames: ['Test_Object__c']
  });
}).then(function(meta) {
  console.dir(meta[0].fields);
}).error(function(err) {
  console.error(err);
});