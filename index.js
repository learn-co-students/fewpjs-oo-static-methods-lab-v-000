class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let lowerCaseWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let stringArray = string.split(' ')
    let newArray = []
    let firstWord = this.capitalize(stringArray[0])
    newArray.push(firstWord)
    for (let i = 1; i < stringArray.length; i++) {
      if (!lowerCaseWords.includes(stringArray[i])) {
        newArray.push(this.capitalize(stringArray[i]))
      } else {
        newArray.push(stringArray[i])
      }
    }
    return newArray.join(' ')
  }
}
