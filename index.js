class Formatter {
  static capitalize(string) {
    let phrase = string;
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
  }

  static sanitize(string) {
    let phrase = string;
    return phrase.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  // static titleize(string) {
  //   let phrase = string;
  //   let array = phrase.split(" ");
  //   let title = [];
  //   for (const word of array) {
  //     let titleWord = word.replace(/\b(?!the|a|an|but|of|and|for|at|by|from)\b\S+/g, (word.charAt(0).toUpperCase() + word.slice(1)));
  //     title.push(titleWord);
  //   }
  //   return Formatter.capitalize(title.join(" "));
  // }

  /* Above is passing all but one test!!! */

  static titleize(string) {
    let phrase = string;
    let words = string.split(" ");
    let title = [];
    let articles = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        title.push(this.capitalize(words[i]));
      } else if (articles.includes(words[i])) {
        title.push(words[i])
      } else {
        title.push(this.capitalize(words[i]))
      }
    }
    return title.join(" ");
  }
}
