class Formatter {

  static capitalize(someString) {
    return someString.charAt(0).toUpperCase() + someString.slice(1)
  }

  static sanitize(someString) {
    let regex = /[^A-Za-z0-9 '-]/g;
    return someString.replace(regex, '')
  }

  static titleize(someString) {
    let doNotCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let someStringArr = someString.split(' ')
    let newStringArr = [someStringArr[0].charAt(0).toUpperCase() + someStringArr[0].slice(1)]
    someStringArr = someStringArr.slice(1)
    for (const word of someStringArr) {
      if (doNotCap.includes(word)) {
        newStringArr.push(word)
      }
      else {
        newStringArr.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    }
    return newStringArr.join(' ')
  }

}