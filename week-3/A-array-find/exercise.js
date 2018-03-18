/* 
  You are given an array of test scores.
  Any result over 60 is a pass. 
  Using .find() (and any other array methods necessary), find the lowest pass score
*/

function isLowestPass(score) {
  return score > 60 && score < 70;
}

var testScores = [90, 50, 100, 25, 81, 66, 80];

var lowestPassScore = testScores.find(isLowestPass);
console.log(lowestPassScore);

/* EXPECTED OUTPUT */
// 66
