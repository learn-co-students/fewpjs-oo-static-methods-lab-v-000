class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  
  static titleize(string) {
    let phrase = string.split(" ");
    let exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    return phrase.map((s, i) => {
      if (exemptWords.includes(s) && i !== 0 ) {
        return s
      }
      else
       return s.charAt(0).toUpperCase() + s.substring(1)
      }).join(" ").toString()
    }
  }
