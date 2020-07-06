class Formatter {
  // is a static method
  static capitalize(sentence) {
    // uppercases the first letter in a String
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }
  // is a static method
  static sanitize(sentence) {
    // removes non-alphanumeric characters except for dash, single quote and space
    return sentence.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence, lower = false) {
    // console.log("sentence", sentence)
    // sentence getting giggles
    let splitSentence = sentence.split(" ")
    // console.log("splitSentence", splitSentence)
    // splitSentence [ 'getting', 'giggles' ]
    let modifiedSentence = []
    let except =  ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
      // Capitalize the first letter of each word of a given string
      for (let i = 0; i < splitSentence.length; i++) { 
        // always capitalizes the first word
        if (i == 0) {
          modifiedSentence.push(splitSentence[i][0].toUpperCase() + splitSentence[i].substr(1))
        } else {
          // if word in sentence is matched to except keep lower case
          if (except.includes(splitSentence[i])) {
            modifiedSentence.push(splitSentence[i])
          } else {
            // Capitalize first letter in word and adding it to that word
            modifiedSentence.push(splitSentence[i][0].toUpperCase() + splitSentence[i].substr(1))
          }
        }
     }
     // return a sentence from the array
     return modifiedSentence.join(" ")
  } 
}