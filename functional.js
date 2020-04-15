let states = ['Kansas', 'Nebraska', 'North Dakota', 'South Dakota'];
//Returns a URL-friendly string
// "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}

//MAP EXAMPLES

function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
// console.log(imperativeUrls(states));

function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
// console.log(functionalUrls(states));

function fullURL(array) {
  // this is a variable in case the url ever changes
  let prependURL = "https://example.com/" 
  return array.map(element => `${prependURL}${urlify(element)}`);
}
// console.log(fullURL(states));

// FILTER EXAMPLE
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if(element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
// console.log(imperativeSingles(states));

function functionalSingle(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
// console.log(functionalSingle(states));

function onlyDakotas(elements){
  return elements.filter(element => element.includes("Dakota"));
}
// console.log(onlyDakotas(states));

function lengthTest(elements){
  return elements.filter(element => element.split(/\s+/).length === 2);
}
// console.log(lengthTest(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(num) {
    total += num;
  });
  return total;
}

// console.log(imperativeSum(numbers));

function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n;});
}
// console.log(`functional version: ${functionalSum(numbers)}`);

//lengths: imperative solution
function imperativeLength(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLength(states));

//functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) =>{
    lengths[element] = element.length;
    return lengths;
  },{});
}
console.log(functionalLengths(states));

//functional multiplicative sum
function multiplicativeSum(elements) {
  return elements.reduce((total, number) => {
    return total *= number;
  }, 1);
}
console.log(multiplicativeSum(numbers)); 