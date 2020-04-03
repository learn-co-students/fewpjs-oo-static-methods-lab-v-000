class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const arrayOfs = ['the', 'a', 'an', 'but', 'of', 'and', 'at', 'by', 'from', 'for']
    const upperCaseArray = []
    const stringArray = string.split(" ")
      
      for (let element of stringArray) {
        if (arrayOfs.includes(element)) {
        upperCaseArray.push(element)
      } else {
        upperCaseArray.push(element.charAt(0).toUpperCase() + element.slice(1))
      }
    }
    
    string = upperCaseArray[0].charAt(0).toUpperCase() 
    + upperCaseArray[0].slice(1) 
    + ' ' 
    + upperCaseArray.slice(1).join(' ')
  
    return string 
  }
}