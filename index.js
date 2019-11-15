class Formatter {
  //add static methods here

  static capitalize(string) {
   return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let wordArray = string.split(' ');
    let titleizedArray = wordArray.map((word,index) => {
      if (index === 0 || !["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"].includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    })
    return titleizedArray.join(" ")
  }
}