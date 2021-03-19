class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase())
  }

  static sanitize(string) {
    return string.replace(/[^\-a-zA-Z0-9 \']*/g, '')
  }

  static titleize(string) {
    string = this.capitalize(string)
    const nonImportantWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return string.split(" ").map((word, index)=>{
      if (nonImportantWords.find(nonImportantWord => nonImportantWord === word) ) {
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(" ")
  }
}