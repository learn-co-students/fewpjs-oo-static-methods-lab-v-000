class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let arrayofWords = sentence.split(' ');
    for (let i =0; i < arrayofWords.length; i++){
      if (i == 0){
        result.push(this.capitalize(arrayofWords[i]))
      } else {
        if (exceptions.includes(arrayofWords[i])){
          result.push(arrayofWords[i])
        } else {
          result.push(this.capitalize(arrayofWords[i]))
        }
      }
    }
    return result.join(" ");
  }
}