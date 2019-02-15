

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
