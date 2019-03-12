
class Node{
  constructor(val){
    this.value = val
    this.nextNode = null
  }

  appendToTail(val){
    var end = new Node(val)
    var n = this
      while(n.nextNode != null){
        n = n.nextNode
      }
      n.nextNode = end
  }
  getEndNode(){
    var n = this
    while(n.nextNode != null){
      n = n.nextNode
    }
    return n
  }
}

function deleteNode(headNode, val){
  var n = headNode

  if(n.value === val){
    return n.nextNode
  }

  while(n.nextNode !== null){
    if(n.nextNode.value === val){
      n.nextNode = n.nextNode.nextNode
      return headNode
    }
    n = n.nextNode
  }
  return headNode
}

var headNode = new Node(1)
// console.log(headNode.value);
headNode.appendToTail(2)
headNode.appendToTail(3)
headNode.appendToTail(4)
// console.log(headNode.nextNode.nextNode.nextNode.value);
// console.log(headNode.getEndNode());

console.log(deleteNode(headNode, 5));
