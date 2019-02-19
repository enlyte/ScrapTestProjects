
function joinWordsFromArray(arrayOfWords){
  var sentence = "";
  var counter = 0;
  arrayOfWords.forEach(word=>{
    word.split('').forEach(letter=>{
      sentence += letter
      counter++
    })
  })
  console.log(counter)
  return sentence;
}

var wordArray = ["Hey", "Hi", "Bye"]
console.log(joinWordsFromArray(wordArray));

function stringBuilder(stringOfWords){
  var newWordArray = []
  stringOfWords.split(' ').forEach(word =>{
    newWordArray.push(word)
    console.log(newWordArray);
  })
  return joinWordsFromArray(newWordArray)
}


var stringOfWords = "Hey Hello Hi"
console.log(stringBuilder(stringOfWords));
