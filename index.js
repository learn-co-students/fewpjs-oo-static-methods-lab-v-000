class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(sentence) {
    const array = sentence.split(" ");
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return array.map(function(word, index) {
      if (!lowerCaseWords.includes(word) || index === 0) {
        return Formatter.capitalize(word);
      } else {
        return word;
      }
    }).join(" "); 
  }
}