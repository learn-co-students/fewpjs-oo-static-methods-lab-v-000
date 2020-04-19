class Formatter {
  //add static methods here
  static capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase()
    return firstLetter + string.slice(1)
  }

  static sanitize(string){
    return string = string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(phrase){
    let exceptions = ['a', 'an', 'and', 'at', 'by', 'the', 'but', 'of', 'for', 'from']
    let result = []
    let arrayOfWords = phrase.split(" ")
    for(let i = 0; i < arrayOfWords.length; i++){
      if(i == 0){
        result.push(this.capitalize(arrayOfWords[i]))
      }else{
        if(exceptions.includes(arrayOfWords[i])){
          result.push(arrayOfWords[i])
        }else{
          result.push(this.capitalize(arrayOfWords[i]))
        }
      }
    }
    return result.join(" ")
  }

}
