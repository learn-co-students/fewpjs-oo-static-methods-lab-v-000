class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^\w,'-\s]/gi,'')
  }

  static titleize(string){
    let newString = []
    let splitString = string.split(' ')


    let firstWord = splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1)

    newString.push(firstWord)
    // newArray.push(firstWord.charAt(0).toUpperCase() + firstWord.slice(1))


    var i;
    console.log(splitString)
    for(i = 1; i < splitString.length; i++){
       if (splitString[i] === 'a' || splitString[i] === 'the' || splitString[i] === 'an' || splitString[i] === 'but' || splitString[i] === 'of' ||splitString[i] === 'and' || splitString[i] === 'for' || splitString[i] === 'at' || splitString[i] === 'by' || splitString[i] === 'from')
       {
        newString.push(splitString[i])
      }
        else {
        newString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
        }
      //return the word then join

        // return newString.join(' ')
    }
    return newString.join(' ')
  }

}
