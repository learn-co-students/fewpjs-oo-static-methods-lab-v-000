class Formatter {
  //add static methods here
    static capitalize(s){
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    static sanitize(s){
        return s.replace(/[^A-Za-z09 '-]/g, '');
    }
    static titleize(s){
        const exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
        return this.capitalize(s.split(' ').map(word => exceptions.includes(word) ? word : this.capitalize(word)).join(' '));
    }
}
