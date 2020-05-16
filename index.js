class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let stringArray = string.split(" ")
    let notThis = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    return stringArray.map(s => {
      if (!notThis.includes(s) || !!(stringArray.indexOf(s) === 0)) {
        return this.capitalize(s)
      } else {
        return s
      }
    }).join(' ')
  }
}