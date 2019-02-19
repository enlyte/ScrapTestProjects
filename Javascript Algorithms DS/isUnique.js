/*
Implement algorithm to test if string has all unique chars

Brute Force: Check each character against the whole array, if any matches, return false
Sort: Sort string, then check if any chars next to eachother are dupes
Hash Table: Put each char in a table, see if any dupes


*/

var hash = require('string-hash')

class IsUnique{
  constructor(){
    this.list = []
   }

  isUniqueCheck(str){
    // var table = []
    var uniqueBool = true
    str.split('').forEach(letter =>{
      var hashedLetter = hash(letter)
      console.log(hashedLetter);
      if(this.list[hashedLetter] === letter){
        uniqueBool = false
      } else {
        this.list[hashedLetter] = letter
        console.log(this.list[hashedLetter]);
      }
    })
    return uniqueBool
  }
}

var m = new IsUnique
console.log(m.isUniqueCheck("abc"));


function isUniqueFunction(str){
  var list = []
  var isUniqueBool = true
  str.split('').forEach(letter =>{
    var hashed = hash(letter)
    if(list[hashed]){
        isUniqueBool = false
    } else {
      list[hashed] = letter
    }

  })
  return isUniqueBool
}
console.log(isUniqueFunction("ABC"));

// Not using additional Data Structures

function isUniqueNoStructures(str){
  var cleanedStr = str.toLowerCase()
  var isUnique = true
  for(i = 0; i < str.length; i++){
    var stringOne = cleanedStr[i]
    for(j = i + 1; j < str.length; j++){
      if(cleanedStr[i] == cleanedStr[j]){
        isUnique = false
      }
    }
  }
  return isUnique
}
console.log("Is Unique No Structures: ");
console.log(isUniqueNoStructures("acba"));

//pg: 90
//44 117 132
