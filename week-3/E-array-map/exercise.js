// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function tripple(number) {
  return number * 3;
}
var numbersTrippled = numbers.map(tripple);
console.log(numbersTrippled);

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersTrippled = numbers.map(function tripple(number) {
  return number * 3;
});

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersTrippled = numbers.map(function(number) {
  return number * 3;
});

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersTrippled = numbers.map(number => {
  return number * 3;
});

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersTrippled = numbers.map(number => number * 3);
