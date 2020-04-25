class Formatter {
  
  static capitalize(string){
    return string.replace(/\b[a-zA-Z]/gi, x => x.toUpperCase() )

  }

  static sanitize(string){
    return string.replace(/[^a-z\s\'\"\-]/gi,"")
  }

  static titleize(string){
    const exceptionalWords = ['the','a','an','but','of','and','for','at','by','from']
    let newstring = string.charAt(0).toUpperCase() + string.slice(1);
    return newstring.replace(/\b(\w*)/gim, function(x){ 
      return (exceptionalWords.includes(x)) ? x : (x.charAt(0).toUpperCase() + x.slice(1)) 
    });
  }

}