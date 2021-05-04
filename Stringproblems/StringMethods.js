/** @param {string} name */
function getNumberOfChars(name) {
    // return the number of characters in: name
    return name.length;

}

/** @param {string} name */
 function getFirstChar(name) {
    // return the first character of: name
    return name[0];

}

/** @param {string} name */
function getLastChar(name) {
    // return the last character of: name
    return name[name.length-1];

}

/** @param {string} name */
function getLower(name) {
    // return name all in lower case (example: "ABC" becomes "abc")
     return name.toLowerCase();
}

/** @param {string} name */
 function getUpper(name) {
    // return name all in upper case (example: "abc" becomes "ABC")
     return name.toUpperCase();
}

/** @param {string} name */
function getCapitalized(name) {
    // return a capitalized version of name (example: "alEX" becomes "Alex")
     return  name[0].toUpperCase()+name.substring(1).toLowerCase();
}

/** @param {string} name */
function getClean(name) {
    // return name without trailing and leading space (example: " alex " becomes: "alex")
   return name.trim()
}


console.log(getClean("            madhu      "));
console.log(getCapitalized("madhu"));
console.log(getUpper("madhu"));
console.log(getLower("MADHU"));
console.log(getLastChar("madhu"))
console.log(getFirstChar("madhu"))
console.log(getNumberOfChars("madhu"))