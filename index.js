class Formatter {
  static capitalize(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
  }

  static sanitize(string) {
    const regex = /[^A-Za-z0-9\s-\']+/g
    return string.replace(regex, '');
  }

  static findWord(word) {
    let forbiddenWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return forbiddenWords.some(element => element === word);
  }

  static titleize(string) {
    let array = string.split(" ");
    let titleizeString = [];

    titleizeString = array.map((word, index) => {
      if(index > 0 && this.findWord(word)) {
        return word;
      }else{
        return this.capitalize(word);
      }
    });
    return titleizeString.join(" ");
  }
}
