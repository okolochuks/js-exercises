function isValue(value) {
  return typeof value;
}
var num = [1, 2, 3, 4];
var valueType = isValue(num);
console.log(valueType);

function isValue(value) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isValue("hello"));
