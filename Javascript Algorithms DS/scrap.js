

var arr = [['x',1],['y',2],['z',3]]

function get(x){
  var value = null;
  arr.forEach(pairs => {
    if(pairs[0] === x){
      console.log("Found Match");
      value = pairs[1]
    }
  })
  return value
}

console.log(get('w'))
console.log(get('x'))

console.log("Test Class: ");
class TestClass {
  constructor(){
    var secondArr = []
  }
  getFunction(){
    console.log("Hey");
  }
}
let m = new TestClass
m.getFunction();


// Join
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join(""));
console.log(elements.join());

// For In
var str = "ABC"
var result = '';
for (var letterIndex in str) {
  result += str[letterIndex];
}
console.log(result);

// Map ES6 version.
var result = '';
str.split('').map(letter => {
  result += letter;
});
console.log(result);

// Map number 
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
