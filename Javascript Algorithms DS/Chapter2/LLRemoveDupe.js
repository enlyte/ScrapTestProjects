
class Node{
  constructor(val){
    this.value = val
    this.next = null
  }

  appendToTail(val){
    var newNode = new Node(val)
    var current = this
    while(current.next !== null){
      current = current.next
    }
    current.next = newNode
  }
}

var head = new Node(3)
head.appendToTail(2)
head.appendToTail(1)
head.appendToTail(1)
head.appendToTail(4)
head.appendToTail(5)
head.appendToTail(3)
console.log(head);

function removeDupes(head){
  var hash = []
  var current = head
  var previous = null
  while(current !== null){
    if(hash[current.value] === true){
      previous.next = current.next
    } else {
      hash[current.value] = true
    }
    previous = current
    current = current.next
  }
  return head
}

showValues(head)
console.log(removeDupes(head));
showValues(head)

function showValues(head){
  var current = head
  while(current !== null){
    console.log(current.value);
    current = current.next
  }
}
