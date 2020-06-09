class Formatter {
    static capitalize(string){
        let newStringArray = string.split("")
        let capFirstElement = newStringArray[0].toUpperCase()
        let newArray2 = newStringArray.slice(1) 
        
        newArray2.unshift(capFirstElement)
        
        let finalString = newArray2.join("")

        return finalString
        
    }

    static sanitize(string){
        let newString = string.replace(/[^A-Za-z0-9-'\s]+/g, '');
        return newString;
    }

    static titleize(string){
        let stringArray = string.split(" ")
        let newArray = []
        let firstElement = stringArray[0]

        if (firstElement.length == 1){
            let upperFirstElement = firstElement.toUpperCase()
            newArray.push(upperFirstElement)
        } 
        else {
            let upperFirstLetter = firstElement.charAt(0).toUpperCase();
            let upperFirstWord = upperFirstLetter + firstElement.slice(1);
            newArray.push(upperFirstWord); 
        }
        for (let i = 1; i < stringArray.length; i++){
            if (stringArray[i] == "a" || stringArray[i] == "the" || stringArray[i] == "from" || stringArray[i] == "for" || stringArray[i] == "but" || stringArray[i] == "and" || stringArray[i] == "by" || stringArray[i] == "at" || stringArray[i] == "of" || stringArray[i] == "an"){
                newArray.push(stringArray[i]) 
            }
            else {
                let upperFirstLetter2 = stringArray[i].charAt(0).toUpperCase();
                let upperFirstWord2 = upperFirstLetter2 + stringArray[i].slice(1);
                newArray.push(upperFirstWord2);
            }
        }
    let finalString = newArray.join(" ");
    return finalString
    }
}
