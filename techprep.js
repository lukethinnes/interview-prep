//NOTES ON REACT
// The user interface library in React is "agnostic". It does not matter where the UI is displayed.
// It does not care where the final components are sent as long as an adjacent library is attached. 
// React does not become something like ReactDOM until it is passed into ReactDOM. Otherwise it is just JS.
// Once again it is a library. This is different from a framework. It only includes enough functions for the agnostic library.
// A component architecture is something like the Headers, body and footer.
// Component trees exist, and there is only a one way data flow with React, such as App to Header/Content/Footer and below that, various JSX tags.
// State exists at a component level. It is then passed down.
// The three staples of Redux are single source of truth, read-only state, and changes are made with pure functions.

// LIFECYCLE METHODS
// componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
// componentDidMount() – Executed on the client side only after the first render.
// componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
// shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
// componentWillUpdate() – Called just before rendering takes place in the DOM.
// componentDidUpdate() – Called immediately after rendering takes place.
// componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

//NOTES ON JS
// The two pillars of JavaScript are protoypal inheritance and functional programming.
// Inheritance is when you design types around what they are. Composition is designing types around what they do.
// Pure functions are functions that will return the same result no matter what argument is passed.

//PRACTICE ALGORITHMS
//Find which integer is most repeated within an array of whole numbers.

// Class Inheritance: 

// instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.

// Prototypal Inheritance: 

// instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

// In JavaScript, prototypal inheritance is simpler & more flexible than class inheritance.

// https://www.w3schools.com/js/js_object_prototypes.asp


// The tight coupling problem 

// The fragile base class problem

// Inflexible hierarchy problem

// The duplication by necessity problem 

// The Gorilla/banana problem

// https://youtu.be/lKCCZTUx0sI



// JS FUNDAMENTAL CONCEPTS : SCOPE, HOISTING, CLOSURES, CALLBACKS, PROMISES, Event Loop, Prototypes

// https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3

// https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4



// COMPOSITION

// https://youtu.be/wfMtDGfHWpA

// https://alligator.io/js/class-composition

// https://ui.dev/javascript-inheritance-vs-composition



// DESIGN PATTERNS

// Design patterns are documented solutions to commonly occurring problems in software engineering. 

// Engineers don’t have to bang their heads on the problems that someone else has already solved.

// https://www.telerik.com/blogs/design-patterns-in-javascript

// singleton, builder, factory, observer



// Concatenative inheritance: 

// The process of inheriting features directly from one object to another by copying the source objects properties. In JavaScript, source prototypes are commonly referred to as mixins. Since ES6, this feature has a convenience utility in JavaScript called `Object.assign()`. Prior to ES6, this was commonly done with Underscore/Lodash’s `.extend()` jQuery’s `$.extend()`, and so on… The composition example above uses concatenative inheritance.

// Prototype delegation: 

// In JavaScript, an object may have a link to a prototype for delegation. If a property is not found on the object, the lookup is delegated to the delegate prototype, which may have a link to its own delegate prototype, and so on up the chain until you arrive at `Object.prototype`, which is the root delegate. This is the prototype that gets hooked up when you attach to a `Constructor.prototype` and instantiate with `new`. You can also use `Object.create()` for this purpose, and even mix this technique with concatenation in order to flatten multiple prototypes to a single delegate, or extend the object instance after creation.

// Functional inheritance: 

// In JavaScript, any function can create an object. When that function is not a constructor (or `class`), it’s called a factory function. Functional inheritance works by producing an object from a factory, and extending the produced object by assigning properties to it directly (using concatenative inheritance). Douglas Crockford coined the term, but functional inheritance has been in common use in JavaScript for a long time.

// As you’re probably starting to realize, concatenative inheritance is the secret sauce that enables object composition in JavaScript, which makes both prototype delegation and functional inheritance a lot more interesting.

// When most people think of prototypal OO in JavaScript, they think of prototype delegation. By now you should see that they’re missing out on a lot. Delegate prototypes aren’t the great alternative to class inheritance — object composition is.

// prototype chain image: https://miro.medium.com/max/2400/1*Lu-BaawSayDz1itKPk2u4w.png



// REACT

// ONE WAY DATA FLOW

// One way data flow means that the model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model (or “store” in React). Only the model has the access to change the app’s state. The effect is that data always flows in a single direction, which makes it easier to understand.

// One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.


// STATE

// States are the heart of React components. States are the source of data and must be kept as simple as possible. 

// Basically, states are the objects which determine components rendering and behavior. 

// They are mutable unlike the props and create dynamic and interactive components.


// PROPS

// Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. 

// They are always passed down from the parent to the child components throughout the application. 

// A child component can never send a prop back to the parent component. 

// This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.



// PHASES OF COMPONENTS LIFECYCLE

// Initial Rendering Phase: 

// This is the phase when the component is about to start its life journey and make its way to the DOM.

// Updating Phase: 

// Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.

// Unmounting Phase: 

// This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.

// LIFECYCLE METHODS

// componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.

// componentDidMount() – Executed on the client side only after the first render.

// componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.

// shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.

// componentWillUpdate() – Called just before rendering takes place in the DOM.

// componentDidUpdate() – Called immediately after rendering takes place.

// componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.


// HOOKS

// Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. 

// Hooks are the functions which "hook into" React state and lifecycle features from function components. 



// Higher Order Components(HOC)

// Higher Order Component is an advanced way of reusing the component logic. 

// Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. 

// They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. 

// You can say that HOC are ‘pure’ components.


// HOC can be used for many tasks like:

// Code reuse, logic and bootstrap abstraction

// Render High jacking

// State abstraction and manipulation

// Props manipulation


// What are Pure Components

// Pure components are the simplest and fastest components which can be written. 

// They can replace any component which only has a render(). 

// These components enhance the simplicity of the code and performance of the application.



// REDUX

// Redux is one of the most trending libraries for front-end development in today’s marketplace. 

// It is a predictable state container for JavaScript applications and is used for the entire applications state management.

// Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.


// Three principles that Redux follows

// Single source of truth: 

// The state of the entire application is stored in an object/ state tree within a single store. 

// The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

// State is read-only: 

// The only way to change the state is to trigger an action. 

// An action is a plain JS object describing the change. 

// Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 

// Changes are made with pure functions: 

// In order to specify how the state tree is transformed by actions, you need pure functions. 

// Pure functions are those whose return value depends solely on the values of their arguments.

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

// console.log(mostRepeatedInt([4, 6, 8,  7, 1, 13, 13, 13]))

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
// console.log(findMatch([9, 5, 7, 4, 9, 5, 4]))

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

function pal() {
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

//Create an NxN multiplication table...

function multiplicationTable(size) {
    output = []
    for (let i = 1; i <= size; i++) {
        container = []
        output.push(container)
        for (let j = 1; j <= size; j++) {
        container.push(i * j)
        }
    }
    return output
    
// Find out how many times a character appears in a string. Only include alphanumeric characters.

function charCount(str) {
    var result = {}
    for(let i = 0; i <= str.length; i++){
        var char = str[i].toLowerCase()
        if(result[char] > 0){
            result[char]++
        } else {
            result[char] = 1
        }
    }
return result
}

// An anagram checker.
function anagram(arr1, arr2) {
    let sortArr1 = arr1.split('').sort((a, b) => a-b)
    let sortArr2 = arr2.split('').sort((a, b) => a-b)
    let catcher1 = {}
    let catcher2 = {}
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let val of sortArr1) {
        catcher1[val] = (sortArr1[val] || 0) + 1
    }
    for (let val of sortArr2) {
        catcher2[val] = (sortArr1[val] || 0) + 1
    }
    for (let key in catcher1) {
        if (catcher2[key] !== catcher1[key]) {
            return false
        }
    }
    return true
}

//  Another solution, refactored to only use one object.

function anagrams (str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let results = {}
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    results[letter] ? results[letter] += 1 : results[letter] = 1
  } 
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]
    if(!results[letter]) {
      return false;
    }
  }
  return true 
}

// Compare two strings to each other and find which words are missing

function missingWords(str1, str2) {
  let output = []
  let x = str1.split(' ')
  let y = str2.split(' ')

  for (let i = 0, j = 0; i < str1.length; i++) {
    if(x[i] !== y[j]) {
      output.push(x[i])
    } else {
      j++
    }
  }
  return output
}

// A frequency counter pattern checking if two array contain the same values, only squared in the second array.

function same(arr1, arr2) {
  if(arr1.length!== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// Count the number of unique values in a sorted array
//
function countUnique(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i+1]) {
            result.push(arr[i])
        }
    }
    return result.length
} 

//Finding the max sum of a given number of integers in an array. (not the best solution!!)

function subrraySum(array, number) {
  if (number > array.length) {
    return null
  }
  var max = -Infinity
  for (let i = 0; i < array.length - number + 1; i++) {
    temp = 0;
    for (let j = 0; j < number; j++) {
      temp += array[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// Refactored...

function maxSubSum(array, number) {
  let maxSum = 0
  let tempSum = 0
  if (array.length < number) return null
  for ( let i = 0; i < number; i++) {
    maxSum += array[i]
  }
  tempSum = maxSum
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

// Given two positive integers, find out if they have the same frequency of digits.

function sameFrequency(num1, num2) {
  return (num1.toString().split('').sort((a, b) => a-b).join('') 
    === num2.toString().split('').sort((a, b) => a-b).join('')
  )
}

// Fibonacci index written recursively.

function fibseq(int) {
    if(int >= 3) {
        return fibseq(int-2) + fibseq(int-1)
    } else {
        return 1
    }
} 

// Using a helper method with recursion to collect all odd values from an array.

function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return
    }
    if (helperInput[0] % 2 !==0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

// Refactored for "pure recursion"...

function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) {
    return newArr
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}

// Find the product of an array using recursion...

function productOfArray(arr) {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}

// Reverse a string using recursion.

function reverse(string) {
  if(string.length <= 1) return string
  return reverse(string.slice(1)) + string[0]
}

// Capitalize each word in an array using recursion.

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()]
  }
  let result = capitalizeWords(array.slice(0, -1))
  result.push(array.slice(array.length-1)[0].toUpperCase())
  return result
}
