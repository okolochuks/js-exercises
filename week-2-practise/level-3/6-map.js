// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` functio

function capitalise(str) {
  var arr = str.split("");
  var lastPartName = arr[0].slice(1, str.length);
  var firstLetter = arr[0].toUpperCase();
  var lastPartNameJoin = lastPartName.join("");
  return firstLetter + lastPartNameJoin;
}
var arr = ["mozafar", "gordon", "joshua", "irina"];

// complete this function

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
