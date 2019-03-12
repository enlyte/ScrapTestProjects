
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

function removeDupesRunner(head){
  var current = head
  while(current !== null){
    var runner = current
    // console.log(runner);
    while(runner.next != null){
      console.log(runner.value);
      if(current.value === runner.next.value){
        console.log("Found Dupe: " + current.value);

        runner.next = runner.next.next
        // console.log(runner.next);
      }
      runner = runner.next
    }
    current = current.next
  }
}

var head = new Node(3)
head.appendToTail(2)
head.appendToTail(1)
head.appendToTail(1)
head.appendToTail(4)
head.appendToTail(5)
// head.appendToTail(3)
// console.log(head);

// showValues(head)
console.log(removeDupesRunner(head));
// showValues(head)

function showValues(head){
  var current = head
  while(current !== null){
    console.log(current.value);
    current = current.next
  }
}
