// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

// The comparison operator(==) is wrong.It suppose to be "===".

var isHappy = "false";

if (isHappy == true) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
