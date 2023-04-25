//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
console.log("Exercise #1")
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


function findWords(arr, string){
    //code goes here
    for (let i = 0; i < arr.length; i++){
        if (string.toLowerCase().includes(arr[i].toLowerCase())){
            console.log(`Matched ${arr[i]}`)
        }
    }
}
//Call method here with parameters
findWords(dog_names, dog_string)

console.log("\n\n")
//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
console.log("Exercise #2")

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
function replaceEvens(arr){
    //code goes here
    for (i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i, 1, "even index")
        }
    }
    return arr
};

console.log(replaceEvens(arr1))
console.log("\n\n")
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

console.log("CodeWars Problem Redo w/ Javascript - Sum Factorial\nhttps://www.codewars.com/kata/56b0f6243196b9d42d000034")
/**
 * 
 * ORIGINAL SOLUTION - PYTHON
 */
// def sum_factorial(lst):
//     sum_fact = 0
//     for num in lst:
//         count = num
//         num_fact = 1
//         while count > 0:
//             num_fact *= count
//             count -= 1
//         sum_fact += num_fact   
//     return sum_fact
// Example Input/Output --> [4, 6] / 744

//JAVASCRIPT SOLUTION

console.log(`
function sum_factorial(lst){
    let sum_fact = 0;
    let count;
    let num_fact;
    for (i = 0; i < lst.length; i++){
        count = lst[i]
        num_fact = 1
        do{
            num_fact *= count;
            count--;
        }
        while (count > 0)
        sum_fact += num_fact
    }
    return sum_fact
}
`)

function sum_factorial(lst){
    let sum_fact = 0;
    let count;
    let num_fact;
    for (i = 0; i < lst.length; i++){
        count = lst[i]
        num_fact = 1
        do{
            num_fact *= count;
            count--;
        }
        while (count > 0)
        sum_fact += num_fact
    }
    return sum_fact
}

arr1 = [4,6]
console.log(`Input [${arr1}]`)
console.log(`Output ${sum_factorial(arr1)}`)
console.log("\n\n")

console.log("CodeWars Problem Redo w/ Javascript - Vowel Count\nhttps://www.codewars.com/kata/54ff3102c1bad923760001f3")
/**
 * 
 * ORIGINAL SOLUTION - PYTHON
 */
// def get_count(sentence):
//     a = sentence.count("a")
//     e = sentence.count("e")
//     i = sentence.count("i")
//     o = sentence.count("o")
//     u = sentence.count("u")
//     return a+e+i+o+u

console.log(`
function get_count(sentence){
    let count1 = 0;
    for (i = 0; i < sentence.length; i++){
        if (sentence.charAt(i) == "a" || sentence.charAt(i) == "e" || sentence.charAt(i) == "i" || 
            sentence.charAt(i) == "o" || sentence.charAt(i) == "u"){
            count1++;
        }
    }
     return count1
}
`)

function get_count(sentence){
    let count1 = 0;
    for (i = 0; i < sentence.length; i++){
        if (sentence.charAt(i) == "a" || sentence.charAt(i) == "e" || sentence.charAt(i) == "i" || 
            sentence.charAt(i) == "o" || sentence.charAt(i) == "u"){
            count1++;
        }
    }
     return count1
}

string1 = "abracadabra"
console.log(`Input [${string1}]`)
console.log(`Output ${get_count(string1)}`)