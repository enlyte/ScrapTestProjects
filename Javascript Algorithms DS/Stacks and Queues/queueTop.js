
function QueueNode(val){
  this.value = val
  this.next = null
}

var top = null

function add(node){
  if(top === null){
    top = node
  } else {
    var current = top
    while(current.next !== null){
      current = current.next
    }
    current.next = node
  }
}

function remove(){
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

var node = new QueueNode(1)
var node2 = new QueueNode(2)
var node3 = new QueueNode(3)

console.log(isEmpty());
add(node)
add(node2)
add(node3)
console.log(top);
console.log(remove());
console.log(top);
console.log(peak());
console.log(isEmpty());
