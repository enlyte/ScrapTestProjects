
function QueueNode(value){
  this.value = value;
  this.next = null;
}

var first = null;
var last = null;

function add(node){
  if(last !== null){
    last.next = node;
    last = node;
  } else {
    last = node;
    first = node;
  }
}

function remove(){
  var currentVal = null;
  if(first !== null){
    currentVal = first.value;
    if(first.next !== null){
      first = first.next;
    } else {
      first = null;
      last = null;
    }
  }
  return currentVal;
}

function peak(){
  var currentValue = null;
  if(first !== null){
    currentValue = first.value;
  }
  return currentValue;
}

function isEmpty(){
  return first === null;
}


var firstNode = new QueueNode(1);
var secondNode = new QueueNode(2);
var thirdNode = new QueueNode(3);
var fourNode = new QueueNode(4);

console.log("Is Empty: " + isEmpty());
add(firstNode);
console.log(first);
console.log(last);
add(secondNode);
console.log("2");
console.log(first);
console.log(last);
add(thirdNode);
console.log("3");
console.log(first);
console.log(last);

console.log("Peak: " + peak());
console.log("Remove: " + remove());
console.log("Remove: " + remove());
add(fourNode);
console.log("Is Empty: " + isEmpty());

console.log("Remove: " + remove());
console.log("Peak: " + peak());
console.log("Remove: " + remove());
console.log("Remove 5: " + remove());
console.log("Peak: " + peak());
console.log("Is Empty: " + isEmpty());


//
// function StackNode(value){
//   this.value = value;
//   this.next = null;
// }
//
// var top = null;
//
// function push(node){
//   if(top !== null){
//     node.next = top;
//   }
//   top = node;
// }
//
// function pop(){
//   var currentVal = 0;
//   if(top === null){
//     //throw error
//     currentVal = null;
//   } else {
//     currentVal = top.value;
//     top = top.next;
//   }
//   return currentVal;
// }
//
// function peak(){
//   if(top === null){
//     // Throw error
//     return null;
//   }
//   return top.value;
// }
//
// function isEmpty(){
//   return top === null;
// }
//
// var node1 = new StackNode(1);
// var node2 = new StackNode(2);
// var node3 = new StackNode(3);
//
// console.log("isEmpty: " + isEmpty());
// console.log("Peak: " + peak());
// push(node1);
// push(node2);
// push(node3);
//
// console.log("isEmpty: " + isEmpty());
// console.log("Peak: " + peak());
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log(pop());
// console.log("isEmpty: " + isEmpty());
""
