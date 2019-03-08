class Person{
  constructor(){
    this.firstName = "Steve"
    this.lastName = "Moy"
  }
}
Person.prototype.nationality = "Asian"
Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName
}

var m = new Person
console.log(m.nationality);
console.log(m.fullName());

class NaiveDictionary{
  constructor(){
    this.keys = []
    this.values = []
  }
  // set(key,value){
  //   this.keys.push(key)
  //   this.values.push(value)
  // }
}

NaiveDictionary.prototype.set = function(key,value){
  this.keys.push(key)
  this.values.push(value)
}

NaiveDictionary.prototype.get = function(key){
  for(var i = 0; i < this.keys.length; i++){
    if(this.keys[i] === key){
      return this.values[i]
    }
  }
  // return null
}

var m = new NaiveDictionary
m.set(1,2)
console.log(m.get(1));
console.log(m.get(2));











// class Person{
//   constructor(){
//     this.firstName = "Steve"
//     this.lastName = "Moy"
//   }
// }
//
// Person.prototype.nationality = "Asian"
// Person.prototype.fullName = function(){
//   return this.firstName + " " + this.lastName
// }
//
// var m = new Person
// console.log(m.nationality);
// console.log(m.fullName());
