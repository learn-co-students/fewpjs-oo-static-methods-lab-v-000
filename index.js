class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let excludingWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = string.split(" ")
    const newArr = arr.map((element) => {
      if (excludingWords.includes(element)) {
        return element;
      } else {
        return this.capitalize(element);
      }
    })
    return this.capitalize(newArr.join(" "));
  }
}
