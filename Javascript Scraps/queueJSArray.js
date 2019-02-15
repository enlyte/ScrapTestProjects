var queueArray = [];
var first = null;
var last = null;

function QueueNode(value){
  this.value = value;
  this.next = null;
}

function add(node){
  queueArray.push(node);
}

function remove(){
  if(queueArray.length === 0){
    return null;
  }
  return queueArray.shift().value;
}

function peak(){
  if(queueArray.length === 0){
    return null;
  }
  return queueArray[0].value;
}

function isEmpty(){
  return queueArray.length === 0;
}

let node1 = new QueueNode(1);
let node2 = new QueueNode(2);
let node3 = new QueueNode(3);

console.log("Is empty: " + isEmpty());
add(node1);
add(node2);
console.log("Peak:" + peak());
console.log(remove());
add(node3);
console.log("Is empty: " + isEmpty());

console.log(remove());
console.log(remove());
console.log(remove());
console.log("Is empty: " + isEmpty());
