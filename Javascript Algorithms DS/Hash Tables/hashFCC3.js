// https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997
//http://www.mattzeunert.com/2017/02/01/implementing-a-hash-table-in-javascript.html

let hash = require('string-hash')

class DumbMap {
  constructor(){
    this.list = []
  }

  get(x){
    var i = hash(x)
    if(!this.list[i]){
      return undefined
    }

    let result

    this.list[i].forEach(pairs => {
      if(pairs[0] === x){
        result = pairs[1]
      }
    })

    return result
  }

  set(x,y){
    let i = hash(x)

    if(!this.list[i]){
      this.list[i] = []
    }

    this.list[i].push([x,y])
  }
}

var m = new DumbMap

m.set("ASDF",5)

m.get("1");
m.get("ASDF");

console.log(m.get("ASDF"));
