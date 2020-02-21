class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^\w \s \d \.'-]/g, '')
  }

  static titleize(sentance){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let result = []
    let arrayWords = sentance.split(' ');
    arrayWords.forEach(word => {
      if (word === arrayWords[0]){
        result.push(this.capitalize(word))
      } else if (exceptions.includes(word)){
        result.push(word)
      } else {
        result.push(this.capitalize(word))
     }
    })
    return result.join(" ");
  }

}
