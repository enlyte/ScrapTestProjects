
class Stack{
  constructor(){
    this.values = []
    this.topIndex = 0
  }
  push(val){
    this.values[this.topIndex] = val
    this.topIndex++
    // this.values.push(val)
  }
  pop(){
    var top = this.values[this.topIndex-1]
    this.topIndex--
    this.values.length = this.topIndex
    return top
    // return this.values.pop()
  }
}
var m = new Stack
m.push(1)
m.push(2)
console.log(m);

console.log(m.pop());
console.log(m);
