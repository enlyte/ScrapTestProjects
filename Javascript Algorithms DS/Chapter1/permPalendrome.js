
// Check if string is a permutation of a palendrome
// Check if # of letters is even, or if one is odd
// Add them to a table, then check
// Can check as adding as well

var str = "Aabbc"
var str2 = 'aabbcc'
var str3 = 'abbc'

function isPermPal(str){
  var arr = str.toLowerCase().split('')
  var table = []
  var isPerm = true
  arr.forEach(letter => {
    if(!table[letter]){
      table[letter] = 1
    } else {
      table[letter] = table[letter] + 1
    }
  })
  var numberOfOdds = 0;

  for(val in table){
    console.log(table[val]);
    if(table[val] % 2 !== 0){
    //    numberOfOdds++
    }
  }

  table.forEach(function(key,val) {
    console.log(key);
    console.log(val);
    if(table[val] % 2 !== 0){
        numberOfOdds++
    }
  })


  if(numberOfOdds > 1){
    return false
  }
  return true
}

console.log(isPermPal(str));
console.log(isPermPal(str2));
console.log(isPermPal(str3));


//
// for(val in table){
//   console.log(table[val]);
//   if(table[val] % 2 !== 0){
//       numberOfOdds++
//   }
// }
