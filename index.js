class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(sentence) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let result = [];
    let words = sentence.split(' ');

    for (const word of words) {
      if (words.indexOf(word) === 0) {
        result.push(this.capitalize(word));
      } else {
        if (exceptions.includes(word)) {
          result.push(word);
        } else {
          result.push(this.capitalize(word));
        }
      }
    }
    
    return result.join(' ');
  }
}
