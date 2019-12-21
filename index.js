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
    var i;
    for(i = 0; i < splitString.length; i++){
      if (splitString[i] === 'a' || 'the' || 'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from')
        {
          newArray.push(splitString[i])
        }
        else {
        let capital = splitString.toUpperCase()
        newArray.push(capital)
        }
      //return the word then join
      return newArray.toString()
    }
  }

}
