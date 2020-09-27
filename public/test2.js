var key = 'real secret keys should be long and random';
var encryptor = require('simple-encryptor')(key);
var encrypted = encryptor.encrypt('testing');
console.log('encrypted: %s', encrypted);
var decrypted = encryptor.decrypt(encrypted);
// Should print 'testing'
console.log('decrypted: %s', decrypted);
