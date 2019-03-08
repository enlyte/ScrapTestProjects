
var str = "aaabbbccccAA"
var str2 = "aabbcabca"

function compressString(str){
  var finalCount = countFunction(str)
  if(finalCount > str.length){
    return str
  }
  // Use string builder Array holder, join at end
  var stringBuilder = []
  var count = 0
  var index = 0

  for(var i = 0; i < str.length; i++){
    count++
    if(str[i] !== str[i+1] || i+1 >= str.length){
      stringBuilder.push(str[i], count)
      count = 0
    }
  }

  console.log(stringBuilder);
  return stringBuilder.join('')
}


function countFunction(str){
  compressedLength = 0
  counter = 0
  for(var i = 0; i < str.length; i++){
    counter++

    if(str[i] !== str[i+1] || i+1 >= str.length){
      if(counter > 9){
        compressedLength += 3
      } else {
        compressedLength += 2
      }
      counter = 0
    }
  }
  return compressedLength
}

console.log(compressString(str));
console.log(compressString(str2));
