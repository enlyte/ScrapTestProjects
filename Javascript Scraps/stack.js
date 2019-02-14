
function StackNode(value){
  this.value = value;
  this.next = null;
}

var top = null;

function push(node){
  if(top !== null){
    node.next = top;
  }
  top = node;
}

function pop(){
  var currentVal = 0;
  if(top === null){
    //throw error
    currentVal = null;
  } else {
    currentVal = top.value;
    top = top.next;
  }
  return currentVal;
}

function peak(){
  if(top === null){
    // Throw error
    return null;
  }
  return top.value;
}

function isEmpty(){
  return top === null;
}

var node1 = new StackNode(1);
var node2 = new StackNode(2);
var node3 = new StackNode(3);

console.log("isEmpty: " + isEmpty());
console.log("Peak: " + peak());
push(node1);
push(node2);
push(node3);

console.log("isEmpty: " + isEmpty());
console.log("Peak: " + peak());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log(pop());
console.log("isEmpty: " + isEmpty());
