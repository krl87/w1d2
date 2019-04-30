//Pulls out command line arguments and initializes empty array where translated words will be kept
var originalWords = process.argv.slice(2);
var pigLatinWords = [];
// console.log("originalWords is", originalWords);
// console.log("pigLatinWords is", pigLatinWords);

//Iterates over the original words, translates each one, and pushes the result into pigLatinWords.
for (var i = 0; i < originalWords.length; i++) {
  // console.log(originalWords[i]);
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}
//joining the contents in pigLatinWords, which we expect to be strings, and outputs the final result to the console.
console.log(pigLatinWords.join(' '));

//takes a word and applies the pig latin translation algorithm to it.
function translateToPigLatin(word) {
  // console.log("Word", word);
  // console.log("First letter", word[0]);
  // console.log("Rest of word", word.slice(2, word.length));
  return word.slice(1, word.length) + word[0] + "ay";
}