
class Node{
  constructor(val){
    this.value = val
    this.next = null
    this.previous = null
  }
  appendToTail(val){
    var end = new Node(val)
    var current = this
    while(current.next !== null){
      current = current.next
    }
    current.next = end
    end.previous = current
  }
  valueExists(val){
    var current = this
    while(current.value !== val && current.next !== null){
      current = current.next
    }
    if(current.value === val){
      return true
    }
    return false
  }
}

var headNode = new Node(1)

headNode.appendToTail(2)
headNode.appendToTail(3)

// console.log(headNode);
console.log(headNode.next.next.previous.value);

console.log(headNode.valueExists(3));
