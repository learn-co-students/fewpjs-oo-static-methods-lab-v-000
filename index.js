class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ");
    let title = words.map(word =>
      word.replace(/\b(?!the|a|an|but|of|and|for|at|by|from)\b\S+/g, w => w.charAt(0).toUpperCase() + w.slice(1)));
    title[0].charAt(0).toUpperCase() + title[0].slice(1);
    return title.join(" ");
  }
}

