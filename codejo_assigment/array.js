// 1. Always Hungry
function alwaysHungry(arr) {
    // your code here
    var count =0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "food")
        {
            console.log("yummy");
            count ++;

        }
    } 
    if(count ==0){
        console.log("Im hurry!")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
   for (var i=0; i<arr.length; i++) {
       if(arr[i] > cutoff){
           filteredArr.push(arr[i]);
       }
   }
   return filteredArr;    
 }

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than average
function betterThanAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    // calculate the average
    var avg = sum / arr.length;
    var count = 0
    // count how many values are greated than the average
    for(var i=0; i<arr.length; i++){
        if(arr[i]> avg){
            count ++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array Reverse
function reverse(arr) {
    // your code here
    var end =0;
    var start = arr.length -1;
    while(end<start){
        var temp =arr[end];
        arr[end]=arr[start];
        arr[start]=temp;
        end ++;
        start --;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length<n)
    {
        var first = fibArr[fibArr.length -1];
        var next = fibArr[fibArr.length -2];
        fibArr.push(first + next);
        
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

