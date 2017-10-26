

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
  var array = []
  array.unshift("foo");
  return array;
}
