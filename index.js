class Formatter {
  //add static methods here
  // is a static method
  static capitalize(sentence) {
    // console.log("sentence", sentence)
    // sentence a
    // uppercases the first letter in a String
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }
  // is a static method
  static sanitize(sentence) {
    // console.log("sentence", sentence)
    // sanitize
    // sentence C catching colds
    // removes non-alphanumeric characters except for dash, single quote and space
    return sentence.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    // console.log("sentence", sentence)
    // sentence F forever foolish
    // sentence getting giggles
    let splitSentence = sentence.split(" ")
    // console.log("modifiedSentence", modifiedSentence)
    // modifiedSentence [ 'F', 'forever', 'foolish' ]
    // modifiedSentence [ 'getting', 'giggles' ]
    // modifiedSentence [ 'a', 'tale', 'of', 'two', 'cities' ]
    console.log("splitSentence.charAt(0).toUpperCase() + splitSentence.slice(1)", splitSentence.charAt(0).toUpperCase() + splitSentence.slice(1))

  } 
}