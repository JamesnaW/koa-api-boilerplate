export function cypher(content){
  const crypto = require('crypto')
  const secret = 'secretkey'
  const cipher = crypto.createCipher('aes192', secret);

  var encrypted = cipher.update(content, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}
export function decypher(encrypted){
  const crypto = require('crypto')
  const secret = 'secretkey'
  const decipher = crypto.createDecipher('aes192', secret);

  var decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
