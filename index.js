class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g,'')
  }

  static checkExceptions(str){
    let list = ['for', 'the', 'a', 'an', 'but', 'of', 'and','at', 'by', 'from']
    return list.includes(str) ? str : this.capitalize(str)
  }

  static titleize(string){
    let words = this.capitalize(string)
    return words.split(' ').map( str => this.checkExceptions(str) ).join(" ")
  }

}