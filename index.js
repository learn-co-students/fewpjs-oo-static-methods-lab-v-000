class Formatter {
  //add static methods here

  static capitalize(sentence){
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
    //return sentence.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })
  }

  static sanitize(sentence){
    return sentence.replace(/[^A-Za-z0-9-' ]+/g, '')

  }

  static titleize(sentence){
    let sentence_array = sentence.split(' ')
    //dont capitalize preps

    let notWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    sentence_array.unshift(Formatter.capitalize(sentence_array.shift()))


    let newSentenceArray = sentence_array.map(function(word){
      if (notWords.includes(word))
        {return word}
      else
        {return Formatter.capitalize(word);}
      }
    )
    
    let newSentence = newSentenceArray.join(" ")
    return newSentence

  }

}