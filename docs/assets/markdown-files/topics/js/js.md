
## javascript-problem-solving-counter

``` 
function createCounter(n) {
  return function() {
    return n++;
  };

// Usage example:
const counter = createCounter(5);

console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7

```

#### Explain closures in JavaScript

In JavaScript, a closure is a special mechanism that allows a function to remember and access variables from its parent scope even after the parent function has finished executing. It’s like a “snapshot” of the variables at the time the function was created.

Closures are powerful because they provide a way to create private variables in JavaScript. You can have variables that are accessible only within a specific function, and their values are retained between function calls. This allows you to encapsulate data and behaviour, making it more secure and modular.

for ex: 
``` 
function outerFunction() {
  const privateVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(privateVariable);
  }

  return innerFunction;
}

var closureExample = outerFunction();

closureExample(); // Output: 'I am from the outer function'

```
