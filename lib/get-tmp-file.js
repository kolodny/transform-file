var fs = require('fs');
var os = require('os');
var crypto = require('crypto');

module.exports = getTmpFile;

function getTmpFile(callback) {
  var fileLocation = os.tmpdir() + crypto.randomBytes(5).toString('hex');

  fs.exists(fileLocation, function(exists) {
    if (exists) {
      getTmpFile(callback);
    } else {
      callback(null, fileLocation);
    }
  });
}
