// Write a method static capitalize that takes in a string and capitalizes the first letter.
// Write a method static sanitize that takes in a string and removes all non - alphanumeric characters except for dashes, single quotes and spaces.
// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.


class Formatter {
  constructor(string){
    this.string = string;
  }

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

   static titleize(str) {
    let badArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let firstWord = str.split(' ')[0]

    return str.split(' ').map(word => {
      if (badArr.includes(word) && word !== firstWord) {
        return word.toLowerCase();
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    }).join(' ')
  }

}
