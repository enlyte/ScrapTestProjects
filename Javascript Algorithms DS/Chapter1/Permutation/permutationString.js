// Sort String Function
// To Lower case
// Sort Strings
// Compare each char

var str1 = "aBCBA"
var str2 = "AABBC"
var str3 = "AABCC"

function sortString(str){
  var arr = str.split('')
  var sortedString = arr.sort()
  return sortedString.join('')
}

function permCheck(str1, str2){
  if(str1.length !== str2.length){
    return false
  }

  str1 = sortString(str1.toLowerCase())
  str2 = sortString(str2.toLowerCase())

  if(str1 === str2){
    return true
  } else {
    return false
  }

  // OR

  // for(var i = 0; i < str1.length; i++){
  //   if(str1[i] !== str2[i]){
  //     return false
  //   }
  // }
  // return true
}

console.log(permCheck(str1, str2));
console.log(permCheck(str1, str3));
console.log(permCheck(str2, str3));
