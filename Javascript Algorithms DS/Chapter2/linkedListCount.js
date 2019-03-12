
class Node{
  constructor(val){
    this.value = val
    this.next = null
    this.nodeCount = 1
  }
  appendToTail(val){
    var newNode = new Node(val)
    var current = this
    while(current.next !== null){
      current = current.next
    }
    current.next = newNode
    this.nodeCount++
  }
}

Node.prototype.getNth = function(nth, head){
  if(nth > head.nodeCount){
    return null
  }
  var backTrack = head.count - nth
  var current = head
  while(backTrack > 0){
    current = current.next
    backtrack--
  }
  return current
}

var n = new Node(1)
n.appendToTail(2)
n.appendToTail(3)

// console.log(n.nodeCount);
// console.log(n.getNth(1, n));
console.log(n.getNth(5, n));
