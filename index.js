class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const forbidden = ['a','an','the','but','of','and','for','at','by','from']

    let newString = []

    string.split(" ").forEach(word => {
      if (forbidden.includes(word) === false) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
      else {
        word
      }
      newString.push(word)
    })
    let joinString = newString.join(' ')
    return joinString.charAt(0).toUpperCase() + joinString.slice(1)
  }
}