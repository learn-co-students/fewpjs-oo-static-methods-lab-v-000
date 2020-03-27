class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z-'\s]+/g, '');
  }

  static titleize(string) {
    const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const splitString = string.split(" ");
    const title = splitString.map(w => {
      return (lowercaseWords.some(e => e === w)) ? w.toLowerCase() : this.capitalize(w);
    });
    title[0] = this.capitalize(title[0]);
    return title.join(" ");
  }

}