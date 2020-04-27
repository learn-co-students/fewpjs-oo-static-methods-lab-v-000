class Formatter {
  //add static methods here

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9' -]+/g, '');
  }

  static titleize(str) {
    const array = str.split(' ')
    let capitalizedStr = []
    capitalizedStr.push(this.capitalize(array[0]))
    const words = ['the', 'a', 'an', 'but', 'of','and','for', 'at', 'by','from']
    for (let index = 1; index < array.length; index++) {
      if (words.find( word => word === array[index] )) {
        capitalizedStr.push(array[index])
      } else {
        capitalizedStr.push(this.capitalize(array[index]))
      }
    }
    return capitalizedStr.join(' ')
  }

}