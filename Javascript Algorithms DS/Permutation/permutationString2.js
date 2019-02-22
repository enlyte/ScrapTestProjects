// Hash table
var hash = require('string-hash')

var str1 = "aBCBA"
var str2 = "AABBC"
var str3 = "AABCD"
var str4 = "AABCDE"

function permCheck(str1, str2){
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  var hashTable = []

  if(str1.length !== str2.length){
    console.log("Dead");
    return false
  }

  // Add str1 to hashtable
  str1.split('').forEach(letter =>{
    var hashed = hash(letter)

    if(hashTable[hashed]){
      hashTable[hashed] = hashTable[hashed] + 1
    } else {
      hashTable[hashed] = 1
    }
  })

  var isPermBool = true
  // Check string 2
  str2.split('').forEach(letter =>{
    var hashed = hash(letter)
    if(hashTable[hashed] === 0 || !hashTable[hashed]){
      isPermBool = false
    }
    hashTable[hashed] = hashTable[hashed] - 1

  })
  return isPermBool
}

console.log(permCheck(str1, str2));
console.log(permCheck(str1, str3));
console.log(permCheck(str2, str3));
console.log(permCheck(str1, str4));
