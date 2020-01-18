class Formatter {

  static capitalize(arg) {
    return arg.charAt(0).toUpperCase() + arg.slice(1);
  }

  static sanitize(arg) {
    return arg.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(arg) {
    let wordArr = arg.split(' ');
    let titleArr = [];
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const word of wordArr) {
      if (excludedWords.includes(word)) {
        titleArr.push(word);
      } else {
        titleArr.push(this.capitalize(word));
      }
    }
    titleArr = this.capitalize(titleArr.join(' '));
    return titleArr;
  }

}
