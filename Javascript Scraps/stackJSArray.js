
var stackArray = [];
var top = null;

function StackNode(value){
  this.value = value;
  this.next = null;
}

function push(node){
  stackArray.push(node);
}

function pop(){
  if(stackArray.length === 0){
    return null;
  }
  return stackArray.pop().value;
}

function isEmpty(){
  return stackArray.length === 0;
}

function peak(){
  if(!isEmpty()){
    return stackArray[stackArray.length-1].value;
  }
  return null;
}

var node1 = new StackNode(1);
var node2 = new StackNode(2);
var node3 = new StackNode(3);

console.log("isEmpty: " + isEmpty());
console.log("Peak: " + peak());
push(node1);
push(node2);
console.log("isEmpty: " + isEmpty());
console.log("Peak: " + peak());
console.log(pop());
push(node3);
console.log(pop());
console.log(pop());
console.log(pop());
console.log("isEmpty: " + isEmpty());
