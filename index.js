class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^\w,'-\s]/gi,'')
  }

  static titleize(string){
    let newArray = []
    let splitString = string.split(' ')

    let firstWord = splitString[0]
    newArray.push(firstWord.charAt(0).toUpperCase() + firstWord.slice(1))


    var i;
    for(i = 1; i < splitString.length; i++){
       if (splitString[i] === 'a' || 'the' || 'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from')
       {
        newArray.push(splitString[i])
      }
        else {
        newArray.push(splitString[i].toUpperCase())
        }
      //return the word then join
        let takeAwayComma = newArray.slice(' ')
      return takeAwayComma.toString()
    }
  }

}
