//Find which integer is most repeated within an array of whole numbers.

function mostRepeatedInt(arr) {
    let count = {}
    for(let i = 0; i < arr.length; i++){
        if(count[arr[i]]){
            count[arr[i]] = count[arr[i]] + 1
        } else {
            count[arr[i]] = 1
        }
    }
    let output = 0
    let numCount = 0

    Object.keys(count).forEach(key => {
        if(count[key] > numCount){
            output = key
            numCount = count[key]
        } 
    })
    return output
}

//Find a way to reverse a string without using the .reverse() method.

function reverse(str) {
    let splitStr = str.split('')
    let output = []
    for(let i = splitStr.length - 1; i>=0; i--) {
        output.push(splitStr[i])
    }
    return output.join('')
}

//Find which number does not have a duplicate within an array of numbers.

function findMatch(arr){
arr = arr.sort()
for(let i = 0; i<arr.length; i=i+2){
    if(arr[i] !== arr[i + 1]){
    return arr[i]
    }
}
}
console.log(findMatch([9, 5, 7, 4, 9, 5, 4]))

//The legendary fizzbuzz...

function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        }else if (i % 3 === 0) {
            console.log('Fizz')
        } 
    }
}

//Write a function to determine if a string is a pallindrome or not.

function pallindrome(str){
    if( str === str.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}

//Another possibility...

funcrtion pal() {
    for(let i = 0; i<str.length/2; i++){
        if(str[i] !== str[str.length - i - 1]){
            return false
        }
    }
    return true
}

//Write a function to determine if two numbers within an array can add to equal a given number.

function add(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                return true
            }
        }
    }
    return false
}

//Find out how many zeroes exist counting up to a given number from 1...

function countZeros(num) {
    count = 0
    for(let i = 1; i<= num; i++) {
        let splitNum = i.toString().split('')
        if(splitNum.includes('0')) {
            splitNum.forEach(number => {
                if(number === '0') {
                    count++
                }
            })

        }
    }
    return count
}