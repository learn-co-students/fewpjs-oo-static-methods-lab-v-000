// Write a method static capitalize that takes in a string and capitalizes the first letter.

// Write a method static sanitize that takes in a string and removes all non-alphanumeric 
// characters except for dashes, single quotes and spaces.

// Write a method static titleize that takes in a string and capitalizes all words in a sentence 
// except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
class Formatter {
    //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string) {
    let array = string.split(' ')
    
    const newArray = array.map(x => {
      if (x === 'the' || x === 'a' || x === 'an' || x === 'but' || x === 'of' || x === 'and' || x === 'for' || x === 'at' || x === 'by' || x === 'from') {
        return x
      } else {
        return (x[0].toUpperCase() + x.slice(1))
      }
    })
    let firstWord = newArray[0][0].toUpperCase() + newArray[0].slice(1)
    newArray.splice(0, 1, firstWord)

    return newArray.join(' ')
  }
}