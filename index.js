class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' w]+/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of','and', 'for', 'at', 'by', 'from'];
    const newStringArr = [];

    const words = string.split(" ")
    words.forEach((word) => {
      exceptions.includes(word) ? newStringArr.push(word) : newStringArr.push(Formatter.capitalize(word));
    });
    newStringArr[0] = Formatter.capitalize(newStringArr[0]);
    return newStringArr.join(" ");
  }
}
