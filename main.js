const biggify = function(num) {
  return num + 9000
  
}

const nasafy = function(num) {
  const arr = []
  let count = num

  while (count >= 1){
    arr.push(count);
    count--;
  }

  arr.push('Blast off!')

  return arr
}

const reversify = function(str) {
  return str.split('').reverse().join('')
  
}

const titleify = function(str) {
  let titleCasedWords = [];
  for (const word of str.split(' ')) {
    titleCasedWords.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return titleCasedWords.join(' ');
}
  
  
  


const crazify = function(str) {
  let newStr = '';
  let crazy = 0;
  for (const char of str) {
    if (char === ' ') {
      newStr+= ' ';
    } else {
      newStr+= crazy % 2 === 1
        ? char.toUpperCase()
        : char.toLowerCase();
      crazy++;
    }
  }

  return newStr
  
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}