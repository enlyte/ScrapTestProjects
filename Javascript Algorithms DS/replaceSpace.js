
var str = "string with spaces"

function replaceSpaces(str){
  var arr = str.split('')
  var count = 0
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === " "){
      count++
    }
  }
  var index = arr.length + (count*3)
  var newString = []

  for(var j = arr.length; j >= 0; j--){
    if(arr[j] === " "){
      newString[index - 1] = '0'
      newString[index - 2] = '2'
      newString[index - 3] = '%'
      index = index - 3
    } else {
      newString[index - 1] = arr[j]
      index--
    }

  }
  console.log(newString.join(''));
  return newString.join('')
}

console.log(replaceSpaces(str));




// function replaceSpaces(str){
//   var arr = str.split('')
//   // console.log(arr);
//   var newString = ""
//
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] === " "){
//       for(var j = 0; j < arr.length; j++){
//         if(j === i){
//           newString += "%20"
//         } else {
//           newString += arr[j]
//         }
//       }
//     }
//   }
//   return newString
// }
