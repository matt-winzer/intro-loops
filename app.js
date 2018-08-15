var numArray = [1, 3, 5, 7, 9, 20, 100, 4]

var objArray = [
  { product: 'tennis ball', price: 3 },
  { product: 'baseball', price: 5 },
  { product: 'basketball', price: 10 },
  { product: 'volleyball', price: 15 },
  { product: 'football', price: 20 }
]

// Write a FOR loop that:
  // iterates through numArray
  // console.logs current value

for (var i = 0; i < numArray.length; i++) {
  // Statement inside here
  console.log(numArray[i])
}


// Write a FOR loop that:
  // iterates through numArray
  // console.logs current value multiplied by 3

for (var i = 0; i < numArray.length; i++) {
  // You can store the current value in a variable
  var current = numArray[i]

  console.log('INDEX: ', i)
  console.log('x3', current * 3)
  console.log('ARRAY LENGTH: ', numArray.length)
}


// Write a FOR loop that:
  // iterates through objArray
  // console.logs product name

for (var i = 0; i < objArray.length; i++) {
  console.log(objArray[i].product)
}


// Write a FOR loop that:
  // iterates through objArray
  // construct a sentence: console.log product name followed by its price
  // SAMPLE: "football costs 20 dollars"

for (var i = 0; i < objArray.length; i++) {
  var productName = objArray[i].product
  var productPrice = objArray[i].price
  // some kind of string concatenation
  var sentence = productName + ' costs ' + productPrice + ' dollars.'

  console.log(sentence)
}


// Write a FOR loop that:
  // iterates through objArray
  // only console.logs product names of products that have a price greater than 10
  // Desired output: "volleyball, football"


for (var i = 0; i < objArray.length; i++) {
  if (objArray[i].price > 10) {
    // statement: runs if condition is true

    var productName = objArray[i].product
    console.log(productName)
  }
}


// Write a FOR loop that:
  // iterates BACKWARDS through numArray
  // console.logs current value

// We need to update our FOR loop's setup expressions to loop backwards
for (var i = numArray.length - 1; i >= 0; i--) {
  console.log(numArray[i])
}
