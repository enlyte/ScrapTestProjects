var hash = require('string-hash')

class SimpleHash{
  constructor(){
    this.list = []
  }

  get(x){
    var i = hash(x)

    if(this.list[i] !== undefined){
      while (this.list[i][0] !== x){
        if(this.list[i+1] !== undefined){
          i++
        } else {
          return
        }
      }
    } else {
      return
    }
    return this.list[i][1]
  }

  set(x,y){
    var i = hash(x)
    console.log(i)

    // Just testing to fill up 2 spots
    this.list[i] = [1,1]
    this.list[i+1] = [1,1]

    while(this.list[i]){
      i = i + 1
    }
    console.log(i)

    this.list[i] = [x,y]
  }
}

var m = new SimpleHash
m.set("Bye", 3)
console.log(m.get("Bye"))
