//if str.length difference is greater than 1, return false
// if str lengths are 1, check if every letter in smaller exists in bigger
// if lengths are equal, check each letter, false if differences are > 1

var str1 = 'pale'
var str2 = 'ple'
var str3 = 'bale'
var str4 = 'bake'
var str5 = 'pla'

function oneAway(str1, str2){
  var arr1 = str1.split('')
  var arr2 = str2.split('')

  var difference = str1.length - str2.length
  var firstString
  var sameCount = false

  if(difference === 0){
     sameCount = true
  }

  if(difference !== 0 &&
     difference !== -1 &&
     difference !== 1){
       return false
    }
    if(difference !== 0){
      if(str2.length > str1.length){
        firstString = false
      } else if(str2.length < str1.length){
        firstString = true
      }
    }

    if(sameCount){
      console.log("Same Count");
      var count = 0
      for(var i = 0; i < str1.length; i++){
        if(arr1[i] !== arr2[i]){
          count++
        }
      }
      if(count > 1){
        return false
      }
    }

    if(!sameCount){
      console.log("Different Count");
      if(firstString){
        var arr3 = arr1
        var arr4 = arr2
      } else {
        var arr3 = arr2
        var arr4 = arr1
      }

      var index1 = 0
      var index2 = 0
      var newDifference = 0
      for(var j = 0; j < str1.length; j++){
        if(arr3[index1] !== arr4[index2]){
          newDifference++
          if(newDifference > 1){
            return false
          }
          index1++
        } else {
          index1++
          index2++
        }
      }

    }

  return true
}

console.log(oneAway(str3, str4));
console.log(oneAway(str1, str2));
console.log(oneAway(str2, str1));
console.log(oneAway(str1, str5));
