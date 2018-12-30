function caesarCipherEncryptor(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return string
    .split('')
    .map(char => {
      let newIndex = alphabet.indexOf(char) + key;
      while (newIndex >= alphabet.length) {
        newIndex -= alphabet.length;
      }

      return alphabet[newIndex];
    })
    .join('');
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
