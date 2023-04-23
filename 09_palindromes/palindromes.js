const palindromes = function(str) {
  const elements = [...str.toLowerCase()].filter(char => {
    const code = char.charCodeAt();

    return (code >= 97 && code <= 122);
  })

  const length = elements.length;
  for (let i = 0; i < Math.round(length) / 2; i++) {

    if (elements[i] !== elements[length - 1 - i]) {
      return false
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
