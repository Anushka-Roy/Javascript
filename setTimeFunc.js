const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

/**expected output
"The index of this number is: 0"
"The index of this number is: 1"
"The index of this number is: 2"
"The index of this number is: 3"
**/
