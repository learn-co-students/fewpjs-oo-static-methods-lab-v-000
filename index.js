class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let wordArr = string.split(" ");
      for (let i=0; i < wordArr.length; i++) {
        if (i == 0) {
          result.push( wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1) )
        } else { 
          if (exceptions.includes( wordArr[i])) {
            result.push(wordArr[i])
          } else {
            result.push(wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1))
          }
        }
      }
      return result.join(" ");
  }
}