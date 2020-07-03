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

  static titleize(sentence, lower = false) {
    // console.log("sentence", sentence)
    // sentence getting giggles
    let splitSentence = sentence.split(" ")
    // console.log("splitSentence", splitSentence)
    // splitSentence [ 'getting', 'giggles' ]
    
    let modifiedSentence = []
    let except =  "the, a, an, but, of, and, for, at, by, from"
  
    // console.log("splitSentence[0].toUpperCase() + splitSentence.slice(1)", splitSentence[0].toUpperCase() + splitSentence.slice(1))
    // splitSentence[0].toUpperCase() + splitSentence.slice(1) GETTINGgiggles
    //  console.log("splitSentence[0][0].toUpperCase() + splitSentence.slice(1)", splitSentence[0][0].toUpperCase() + splitSentence.slice(1))
    //  splitSentence[0][0].toUpperCase() + splitSentence.slice(1) Ggiggles
    // (lower ? modifiedSentence.toLowerCase() : modifiedSentence).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

      // Capitalize the first letter of each word of a given string
      for (let i = 0; i < splitSentence.length; i++) { 
        capitalizeSentence = splitSentence[i][0].toUpperCase() + splitSentence[i].substr(1);
      }
      console.log("capitalizeSentence",CapitalizeSentence)
      // splitSentence F
      // splitSentence E
      // splitSentence A

      
        // return splitSentence
  } 
  // console.log("splitSentence",splitSentence)
}