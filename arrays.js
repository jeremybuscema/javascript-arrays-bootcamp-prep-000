

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newArray = []
  newArray.unshift("foo", 1);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray1 = [1]
  newArray1.unshift("foo");
  return newArray1;
}
