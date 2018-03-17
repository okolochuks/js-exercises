// The code is valid but the program does not produce the expected result
// Fix it.

var isHappy = false;

function isHappyBig(people) {
  if (isHappy) {
    return true;
  } else {
    return false;
  }
}

var howHappy = isHappyBig("Daniel");
console.log(howHappy);

if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am happy
*/
