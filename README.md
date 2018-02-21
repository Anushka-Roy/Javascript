# Javascript

This question tests your knowledge of some important JavaScript concepts, and because of how the JavaScript language works this is actually something that can come up quite often when you’re working — namely, needing to use setTimeout or some sort of async function within a loop.

The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.arr[4] does not exist, which is why you get undefined
