class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-za-z0-9-'\s]/g, '').replace(/\^/g, '')
  }

  static titleize(str) {
    const whitelist = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arr = str.split(' ')
    let newArr = []
    newArr.push(this.capitalize(arr[0]))

    arr.slice(1).map(word => whitelist.includes(word) ? newArr.push(word) : newArr.push(Formatter.capitalize(word)))

    return newArr.join(' ')
  }
}
