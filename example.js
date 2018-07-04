const check = require('esdb-check');

const esdbcheck = new check();

esdbcheck.check('mycrypto.com').then(function(output) {
  console.log(output);
})
