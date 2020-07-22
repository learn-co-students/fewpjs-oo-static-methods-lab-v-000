class Formatter {
  //add static methods here
  static capitalize(newString){
    return newString.replace(/^[a-z]/,newString.charAt(0).toUpperCase());
  }
  static sanitize(newString){
    return newString.replace(/[^A-Za-z0-9-'\s]+/g,'');
  }
  static titleize(newString){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return newString.split(" ").map((w,i)=>(exceptions.find(exception=>w===exception)&&!!i)?  w : this.capitalize(w)).join(" ");
  }
}
