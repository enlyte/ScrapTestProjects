
var str = "aaAABbcccccaaa"


function stringCompress(str){
  var newString = ""
  var counter = 1
  var index = 0

  for(var i = index + 1; i <= str.length; i++){
    if(str[index] === str[i]){
      counter++
    } else {
      newString += str[index] + counter
      index = index + counter
      counter = 1
    }
  }

  if(str.length <= newString.length){
    return str
  }
  return newString
}

var str = "aaAABbcccccaaa"
console.log(stringCompress(str));
var str2 = "abcabcabcaa"
console.log(stringCompress(str2));
