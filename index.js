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

  static titleize(sentence) {
    // Note: This doesn't work if one of the specialWords has a comma or other punctuation after it.
    const specialWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const sentenceWords = sentence.split(' ');
    const [firstWord, restOfSentence] = [sentenceWords[0], sentenceWords.slice(1)];
    
    const selectivelyCapitalizedWords = restOfSentence.map(
      function(word) { return specialWords.includes(word) ? word : this.capitalize(word) }.bind(this)
    ); // I need 'this' to be the class, not the global object.

    return `${this.capitalize(firstWord)} ${selectivelyCapitalizedWords.join(' ')}`;
  }
}