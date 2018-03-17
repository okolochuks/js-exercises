/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var arr = str.split("");
  console.log(arr);
  var lastPartName = arr.slice(1, str.length);
  console.log(lastPartName);

  var firstLetter = arr[0].toUpperCase();
  console.log(firstLetter);
  var lastPartNameJoin = lastPartName.join("");
  console.log(lastPartNameJoin);
  console.log(typeof lastPartNameJoin);
  return firstLetter + lastPartNameJoin;
}

/* 
  DO NOT EDIT BELOW THIS LINES
  --------------------------- */
var name = "daniel";
console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
