class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str) {
    const checkArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const stringArray = str.split(' ');
    const titleArray = stringArray.map(function(element) {
      if (!checkArray.find(x => x === element)) {
        return Formatter.capitalize(element)
      } else { return element };
    })
    const titleized =  titleArray.join(' ');
    return Formatter.capitalize(titleized)
    }
}