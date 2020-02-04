class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(saying) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let wordzArray = saying.split(" ")
    for (let n = 0; n < wordzArray.length; n++) {
      if (n == 0 ) {
        result.push(this.capitalize(wordzArray[n]))
      } else {
        if (exceptions.includes(wordzArray[n])) {
          result.push(wordzArray[n] )
        } else {
          result.push(this.capitalize(wordzArray[n]))
        }
      }

    }
    return result.join(" ");
  }
}
