var hash = require('string-hash')

function isUnique(str){
  var boolTable = []
  for(i = 0; i < str.length; i++){
    var val = str.charAt(i)
    if(boolTable[val]){
      return false
    }
    boolTable[val] = true
  }
  return true
}

console.log(isUnique("ABCaa"));

function sortString(str){
  var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join('');
}

function isUniqueSort(str){
  var sortedStr = sortString(str)
  console.log(sortedStr);
  return sortedStr
}

console.log(isUniqueSort("ADJKEJ"));


// https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript
// https://khan4019.github.io/front-end-Interview-Questions/sort.html
