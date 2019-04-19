
function StackNode(val){
  this.value = val
  this.next = null
}
var top = null
function push(node){
  if(top !== null){
    node.next = top
  }
  top = node
}

function pop(){
  var value = top.value
  top = top.next
  return value
}

function peak(){
  return top.value
}

function isEmpty(){
  return top === null
}

var node = new StackNode(1)
var node2 = new StackNode(2)
var node3 = new StackNode(3)

console.log(isEmpty());
push(node)
push(node2)
push(node3)
console.log(top)
console.log(pop())
console.log(top)
console.log(isEmpty())
console.log(peak());
pop()
pop()
console.log(isEmpty())
