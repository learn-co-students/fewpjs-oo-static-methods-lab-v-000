class Formatter {
  //add static methods here
    static capitalize(str){
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    static sanitize(str){
      return str.replace(/[^A-Za-z0-9 '-]/g, '')
    }

    static titleize(str){
       let arr = str.split(" ")
       let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

       return arr.map(ar => {
          if (!exceptions.includes(ar) || !!(arr.indexOf(ar) === 0)){
            return this.capitalize(ar)
          }else{
            return ar
          }
       }).join(' ')
    }
}