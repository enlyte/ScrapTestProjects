class Person{
  constructor(){
    this.firstName = "Steve"
    this.lastName = "Moy"
  }
}
Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

var steve = new Person
console.log(steve.nationality);
console.log(steve.name());




function NaiveDict(){
    this.keys = []
    this.values = []
}
NaiveDict.prototype.set = function(key, value){
    this.keys.push(key)
    this.values.push(value)
}
NaiveDict.prototype.get = function(lookupKey){
    for (var i=0;i<this.keys.length;i++){
        var key = this.keys[i];
        if (key === lookupKey) {
            return this.values[i]
        }
    }
}

var n = new NaiveDict
n.set(1,2)
console.log(n.get(1));
