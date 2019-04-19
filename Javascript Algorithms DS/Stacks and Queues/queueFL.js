function QueueNode(val){
  this.value = val
  this.next = null
}

var top = null
var bottom = null

function add(node){
  if(bottom !== null){
    bottom.next = node
    bottom = node
  } else {
    top = node
    bottom = node
  }
}
function remove(){
  if(top === null){
    return null
  }
  var value = top.value
  if(top.next === null){
    top = null
  } else {
    top = top.next
  }
  return value
}

function peak(){
  if(top){
    return top.value
  } else {
    return null
  }
}

function isEmpty(){
  return top === null
}

var node1 = new QueueNode(1)
var node2 = new QueueNode(2)
var node3 = new QueueNode(3)

add(node1)
add(node2)
add(node3)

console.log(top);
console.log(remove());

console.log(top);
console.log(remove());
console.log(remove());
// console.log(remove());
console.log(peak());
console.log(isEmpty());
