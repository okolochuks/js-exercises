/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

var pairsByIndex; // Complete this statement

var validValue = function(element) {
  return element === pairsByIndex;
};

pairsByIndexRaw.filter(validValue);
console.log(pairsByIndexRaw.filter(validValue));

function isNonPair(arr) {
  return arr === unpaired;
}

var arr = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];
var unpaired = arr.filter(isNonPair);
console.log(unpaired);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
