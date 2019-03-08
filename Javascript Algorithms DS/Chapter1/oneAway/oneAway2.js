
var str1 = 'pale'
var str2 = 'ple'
var str3 = 'bale'
var str4 = 'bake'
var str5 = 'pla'
var str6 = "Plates"



function oneAway(str1,str2){
  var resultBool
  if(str1.length === str2.length){
    resultBool = sameLengthCheck(str1,str2)
  }
  if(str1.length > str2.length){
    resultBool = differentLengthCheck(str1,str2)
  } else if(str1.length < str2.length) {
    resultBool = differentLengthCheck(str2,str1)
  }
  return resultBool
}

function sameLengthCheck(str1,str2){
  // console.log("Same Length");
  var foundDifference = false
  for(var i = 0; i < str1.length; i++){
    if(str1[i] !== str2[i]){
      if(foundDifference){
        return false
      }
      foundDifference = true
    }
  }

  return true
}

function differentLengthCheck(str1,str2){
  // console.log("Different Length");
  var arr1 = str1.split('')
  var arr2 = str2.split('')
  var difference = Math.abs(str1.length - str2.length)
   if(difference > 2){
     return false
   }
   var index1 = 0
   var index2 = 0
   var foundDifference = false
   for(var i = 0; i < str1.length; i++){
     if(str1[index1] === str2[index2]){
       index1++
       index2++
     } else{
       if(foundDifference){
         return false
       }
       foundDifference = true
       index1++
     }
   }
   return true
}











console.log("1 Should Be True: " + oneAway(str1, str2));
console.log("1 Should Be True: " + oneAway(str2, str1));
console.log("Same 1 Should Be True: " + oneAway(str3, str4));
console.log("Same 1 Should Be True: " + oneAway(str1, str3));
console.log("Same 2 Should Be False: " + oneAway(str1, str4));
console.log("2 Should Be False: " + oneAway(str1, str5));
console.log("2 Should Be False: " + oneAway(str1, str6));
