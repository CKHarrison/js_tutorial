const Phrase = require("ckh-palindrome");

let string = prompt("PLease enter a string for palindrome testing:");
phrase = new Phrase(string);

if(phrase.palindrome()) {
  alert(`"${phrase.content} " is a palindrome`);
} else {
  alert(`"${phrase.content} " is not a palindrome`);
}