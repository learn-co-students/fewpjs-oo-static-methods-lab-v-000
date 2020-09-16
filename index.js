class Formatter {
  //add static methods here
  static capitalize( word ) { //Static methods are class level methods - they are not callable on instances of a class, only the class itself. 
    console.log( word )
    const split_word = word.split('')
    split_word[0] = split_word[0].toUpperCase()
    const new_word = split_word.join('')
    console.log(new_word)
    return new_word

    //return string.charAt( 0 ).toUpperCase() + string.slice( 1 ) this is good too
  }

  static sanitize( word ) {
    return word.replace( /[^A-Za-z0-9 '-]/g, '' ) //gsub
  }

  static titleize( sentence ) {
    let exceptions = ['the','a','an','but','of','and','for','at','by','from']
    //all exception words
    let result = [];
    //result array for holding
    let arrayOfWords = sentence.split( " " )
    //splits it
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      //for as long as the array's length is, iterate forward from zero
      if ( n == 0 ) { //first letter
        result.push( this.capitalize( arrayOfWords[ n ] ) ) //Capitalize this word and push it
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) { //if its an exception push it
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) ) //if its not, capitalize it first
        }
      }

    }
    return result.join( " " ); //then join it together last
   }

} 