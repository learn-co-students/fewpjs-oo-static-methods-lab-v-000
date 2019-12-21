class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^\w,'-\s]/gi,'')
  }

  static titleize(string){
    let splitString = string.split(' ')
    console.log(splitString)
    var i;
    for(i = 0; i < splitString.length; i++){
      if (splitString[i] === 'a' || 'the' || 'an' || 'but' || 'of' || 'and' || 'for' || 'at' || 'by' || 'from')
        splitString[i].join(' ')
        else {
        splitString[i].capitalize
        }
      //return the word then join
    }
  }
}
