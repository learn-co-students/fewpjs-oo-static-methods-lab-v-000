class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let wordsArray = sentence.split(" ")

    for (let word = 0; word < wordsArray.length; word++) {
      // if the word is at the 0 index, capitalize the word
      if (word == 0) {
        result.push(this.capitalize(wordsArray[word]))
      } else {
        if (exceptions.includes( wordsArray[word])) {
          result.push(wordsArray[word])
        } else {
          result.push(this.capitalize(wordsArray[word]))
        }
      }
    }

    return result.join( " " );
  }
}