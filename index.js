class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const reservedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const titleWords = string.split(' ');

    const [firstWord, restOfSentence] = [titleWords[0], titleWords.slice(1)];

    const titleCaseWords = restOfSentence.map(function(word) {return reservedWords.includes(word) ? word : this.capitalize(word)}.bind(this));

    return `${this.capitalize(firstWord)} ${titleCaseWords.join(' ')}`;
  }
}