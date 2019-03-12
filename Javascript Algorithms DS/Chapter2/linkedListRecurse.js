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

function printKthToLast(head, k){
  if(head === null){
    return 0
  }
  var index = printKthToLast(head.next, k) + 1
  if(index === k){
    console.log("This is it: " + head.value);
  }
  return index
}








// function printKthToLast(head, k){
//   if(head === null){
//     return 0
//   }
//   var index = printKthToLast(head.next, k) + 1
//   if (index === k){
//     console.log("The " + k + "th To last is " + head.value);
//   }
//   return index
// }



var n = new Node(1)
n.appendToTail(2)
n.appendToTail(3)
n.appendToTail(4)
n.appendToTail(5)
n.appendToTail(6)
n.appendToTail(7)

// console.log(printKthToLast(n, 2));
// console.log(printKthToLast(n, 3));
console.log(printKthToLast(n, 3));
// console.log(printKthToLast(n, 5));
