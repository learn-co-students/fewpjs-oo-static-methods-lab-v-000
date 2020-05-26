class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^'0-9a-z- ]/gi, '')
  }

  static titleize(string) {
    let result = [];
    let ignoreWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    string.split(" ").forEach(function(w) {
      let noBueno = 0;
      ignoreWords.forEach(function(iw) {
        if (iw === w)
          { noBueno = 1 }
      })   
      if (noBueno == 1) {result.push(w)}
        else {result.push(Formatter.capitalize(w))}
    });
    return Formatter.capitalize(result.join(" ")); 
  }
}