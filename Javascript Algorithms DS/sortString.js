
// Check if one string is permutation of another

// Brute Force: Go through each letter, find it in other string, remove if exists in both
// Sort: Then see if they are the same, one by one
// Hash: Put them in a table with a count

var str = " DCABDED"

function sortString(str){
  var arr = str.split('')
  var tmp

  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr.join('')
}




console.log(sortString(str));

function sortString2(str){
  var arr = str.split('');
  var sorted = arr.sort();
  return sorted.join('');
}



function sort(str){
  var arr = str.split('')
  var sorted = arr.sort()
  return sorted.join('')
}

function sort2(str){
  var arr = str.split('')
  var temp

  for(var i = 0; i < str.length; i++){
    for(var j = i+1; j < str.length; j++){
      if(arr[i] > arr[j]){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr.join('')
}

var str2 = " ACBDED"
console.log(sortString2(str2));

var str2 = " ACBDED"
console.log(sort2(str2));


// Ascii Compare (Number rises in alphabet order)
var a = "a"
var b = 'B'
var c = 'c'

if(a > b){
  console.log("A is bigger");
} else {
  console.log("B is bigger");
}
