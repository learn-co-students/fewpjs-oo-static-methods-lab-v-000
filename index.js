class Formatter {
  //add static methods here
  static capitalize(str) {
    const upcasedFirstLetter = str[0].toUpperCase();

    // if(str[0] === upcasedFirstLetter) {
    //   return str;
    // } else {
    //   return upcasedFirstLetter + str.slice(1);
    // }

    return str[0] === upcasedFirstLetter ? str : upcasedFirstLetter + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-z0-9-'\s]+/gi, '');
  }

  static titleize(sentence) { // Something's wrong here.
    const specialWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const sentenceWords = sentence.split(' ');
    
    const capitalizedWords = sentenceWords.map(function(word) {
      if(sentenceWords.indexOf(word) === 0 || !specialWords.includes(word)) {
        return this.capitalize(word);
      }
    }.bind(this)); // I need this to be the class, not the global object.

    return capitalizedWords.join(' ');
  }
}