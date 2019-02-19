
class DumbMap {
  constructor(){
    this.list = []
  }

  get(x){
    let result

    this.list.forEach(pairs => {
      if(pairs[0] === x){
        result = pairs[1]
      }
    })
    //console.log('get ${x}')
    return result
  }

  set(x,y){
    this.list.push([x,y])
    //console.log('set ${x} to ${y}');
  }
}

let m = new DumbMap()
m.set('x', 1)
m.set('y', 2)
console.log(m.get('y'));

console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')

// console.log(m.get(1));

console.log(m.get('I_DONT_EXIST')) // undefined
