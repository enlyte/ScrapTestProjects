var hash = require('string-hash')

class SimpleHash{
  constructor(){
    this.list = []
  }

  get(x){
    var i = hash(x)
    return this.list[i][1]
  }

  set(x,y){
    var i = hash(x)
    this.list[i] = [x,y]
  }
}

var m = new SimpleHash
m.set("Bye", 3)
console.log(m.get("Bye"))
