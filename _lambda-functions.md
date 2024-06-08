## 6. Arrow Functions 
Arrow Functions in JavaScript allow for concise expression of lambda expressions, which are idiomatic to the core language. They provide a succinct syntax for defining anonymous functions, leveraging lambda expression concepts extensively.

### 6.1 Use Arrow Functions [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
Arrow functions are imperative in the LambdaScript specification, prioritizing composability over context, which reduces the risk of creating brittle code in JavaScript. While arrow functions are capable of adopting a "this" based execution context, they are used in LambdaScript to explicitly denote the absence of context based programming.

An example of composable lambda expressions:
```javascript
/**
 * Applies a series of transformation functions to an input value.
 * @param {function|string} f - The first transformation function or string to be transformed.
 * @param {any} x - The input value to be transformed.
 * @returns {function} - A function that applies the remaining transformation functions.
 */
const transform = (f, x) => {
  if (typeof f === 'function') {
    const y = f(x)
    return z => transform(z, y)
  }
  return z => transform(z, f)
}

const addWorld = x => x + 'world'
const addUnderscore = x => x.slice(0, 5) + '_' + x.slice(5)
const upperCase = x => x.toUpperCase()
const lowerCase = x => x.toLowerCase()

// Example usage:
transform('Hello')
  (addWorld)
  (addUnderscore)
  (upperCase)
  (lowerCase)
  (console.log)
```
LambdaScript emphassis a concution of procedrual and functional progrmaming. LambdaScript does not fight against the underlying strenghs of JavaScript ignoring paradigms that can add complexities 

### 6.2 Invocation Order [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
LambdaScript in practice can constitutes to several functions needing to be declared before being called. therefore it helps to place functions in an order where dependent functions are placed above their dependencies. 


Due to the nature of function expressions, LambdaScript commonly requires functions to be declared before they are called. To ensure smooth execution, it's recommended to position dependent functions (those relying on others) below the functions they depend on.

> ### Arrange functions and their calls from bottom to top when possible.

This rule has several benefits. 
- Decreases the likelihood of reference errors, particularly when transitioning between asynchronous and synchronous usage.
- Presents a more intuitive and predictable depiction of JavaScript's code execution flow.
- Reduces cognitive hurdles when restructuring code.
- Provides a single structural style guide.

For instance, in a module, an `init()` function should be expected at the very bottom of a module, just before any final exports.

### 6.2 Currying [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Currying is the technique of translating a function that takes multiple arguments into a sequence of families of functions, each taking a single argument.

```javascript
/**
 * Creates a function that speaks a given sound for a specific animal.
 * @param {string} animal - The animal to speak.
 * @returns {function} - A function that takes a sound and logs the animal's sound.
 */
const speak =  animal => sound => console.log(`The ${animal} ${sound}`)

/**
 * Curries a function by partially applying its arguments.
 * @param {function} fn - The function to curry.
 * @returns {function} - A curried function.
 */
const curry = fn => arg1 => arg2 => fn(arg1, arg2)

/**
 * Curries the speak function.
 * @type {function}
 */
const makeSpeak = curry(speak)

// Creates final functions.
const meow = makeSpeak("cat")
const bark = makeSpeak("dog")
const roar = makeSpeak("lion")

// Example usage
meow("meows") // Output: The cat meows
bark("woofs") // Output: The dog woofs
roar("roars") // Output: The lion roars
```
The use of currying should not be overly emphasized in LambdaScript; a standard function will suffice in most cases.

### 6.3 Partial Application
Partial application involves creating a new function by fixing some arguments of a function, resulting in another function with a smaller arity.

```javascript
const output = {
    createAccount: ({ firstName, lastName, type, balance, currency }) => console.info(`Creating account for ${firstName} ${lastName} with ${type} account type, balance: ${balance} ${currency}`),
    deposited: ({ amount, currency, balance }) => console.info(`Deposited ${amount} ${currency}. New balance: ${balance} ${currency}`),
    insufficient: ({ amount, currency }) => console.info(`Insufficient funds to withdraw ${amount} ${currency}`),
    withdrew: ({ amount, currency, balance }) => console.info(`Withdrew ${amount} ${currency}. New balance: ${balance} ${currency}`),
}

/**
 * Creates a bank account with deposit and withdraw methods
 * @param {string} firstName - First name of the account holder
 * @param {string} lastName - Last name of the account holder
 * @param {string} type - Type of account (e.g., savings, checking)
 * @returns {Object} An object with deposit and withdraw methods
 */
const createAccountPartial = (firstName, lastName, type) => {
    /**
     * Inner function to handle deposit and withdrawal
     * @param {number} balance - Initial balance of the account
     * @param {string} currency - Currency of the account
     */
    return (balance, currency) => {
        const outputValues = { firstName, lastName, type, balance, currency }

        output.createAccount(outputValues)

        const accountAction = (amount, transactionType) => {
            switch (transactionType) {
                case 'deposit':
                    balance += amount
                    outputValues.amount = amount
                    outputValues.balance = balance
                    output.deposited(outputValues)
                    break
                case 'withdraw':
                    if (amount > balance) return void output.insufficient({ amount, currency })

                    balance -= amount
                    outputValues.amount = amount
                    outputValues.balance = balance
                    output.withdrew(outputValues)
                    break
            }
        }

        return {
            deposit: amount => accountAction(amount, 'deposit'),
            withdraw: amount => accountAction(amount, 'withdraw'),
        }
    }
}

// Partially applied function to create a savings account
const johnsSavingAccount = createAccountPartial('John', 'Doe', 'savings')

// Partially applied function to create a checking account
const alicesCheckingAccount = createAccountPartial('Alice', 'Smith', 'checking')

// Example usage
const johnsAccountInstance = johnsSavingAccount(500, 'USD') // Creates a savings account function
johnsAccountInstance.deposit(200) // Output: Deposited 200 USD. New balance: 700 USD
johnsAccountInstance.withdraw(100) // Output: Withdrew 100 USD. New balance: 600 USD

const alicesAccountInstance = alicesCheckingAccount(1000, 'EUR') // Creates a checking account function
alicesAccountInstance.deposit(300) // Output: Deposited 300 EUR. New balance: 1300 EUR
alicesAccountInstance.withdraw(200) // Output: Withdrew 200 EUR. New balance: 1100 EUR

```


### 6.4 Composition [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Compose and pipe are two common higher-order functions used in functional programming to combine multiple functions into a single function, enabling cleaner and more concise code by promoting function reusability and composability. P

#### 6.4.1 Compose
The compose function takes multiple functions as arguments and returns a new function that represents the composition of those functions. In other words, the result of each function is passed as an argument to the next function in the chain.

```javascript
const addOne = x => x + 1
const double = x => x * 2
const square = x => x * x

const compose = comp(square, double, addOne)
compose(3) // Output: 64
```

#### 6.4.2 Pipe
The pipe function, akin to compose, applies functions from left to right instead of right to left. This implies that the output of one function serves as the input for the subsequent function.

```javascript
const addOne = x => x + 1
const double = x => x * 2
const square = x => x * x

const compose = pipe(addOne, double, square)
compose(3) // Output: 64
```

### 6.5 Recursion
Recursion in JavaScript is crucial for solving problems where a function calls itself to break down complex tasks into simpler ones. However, unbounded recursion can lead to stack overflow errors. Tail call optimization and linear tail recursion mitigate this risk by optimizing recursive functions to use constant stack space. They ensure efficient memory usage and prevent stack overflow by reusing stack frames. By employing these techniques, developers can harness the power of recursion while safeguarding against performance issues inherent in deep recursive calls.

```javascript
TBA
```
### 6.6. Encapsulation
In ECMAScript 2015 and later versions, encapsulation is achieved in a minimalist manner:

- **Module Scope Encapsulation:** Functions defined within the module scope are private by default and can be made public using the `export` keyword.
- **Closures Encapsulation:** Functions and variables within a closure are encapsulated, accessible only to inner returning functions as needed.
- **Module Pattern:** By returning an object containing methods, internal functionalities can be exposed and made portable within the codebase.

JavaScript is not limited to the above encapsulation strategies; there are many more ways to achieve encapsulation without the use of the 'this' context.

? = reword
### 6.7 Inheritance and Subtype Polymorphism ?
Inheritiance is strongly tied to the concept of Object oriented programming but it can be acieved in many other paradigms. JavaScritp has many ways of achieving inhertiance and polymorphism. LambdaScript uses a simple and maintainable stragegy to suit general purpose inhertiance and polymorphism. 

#### 6.7.1 Plane Object Literals ?
Inhertiance and polymorphism can sometimes unecessarily over-complicate a codebase. Plane objects can serve as simple and maintainable configureations for mult-purpose functions. The most simplist strategy should always be considered before using something more convoluted. 

#### 6.7.2 Polymorphic Functions ?
A polymorphic function is a function that can be applied to values of different data types and produce appropriate results based on the actual type of the argument(s) it receives.

#### 6.7.3 Factory Functions ?
 A factory function is a function that creates and returns new objects. It acts like a blueprint or template for generating objects with specific properties and behaviors.   A factory function can be a powerful means for performing object composition.

A factory function can benefit from: 
- Spread Operator
- Object.assign
- StructuredClone
- Array.fromEnties

The purpose of a factory function in LambdaScript is to separate object mainpulation from polymorphic functions. Ideally, polymorphic functions should consume factory objects without manipulating the core object. This sholdn't be conflated with manipulating object values of the factory-object.

#### 6.7.4 Sybtype Polymorphism ?
There are many ways to achieve subtype polymorphism. LabdaScript prefers two for factory objects.

- Type by object key: An object key as a string, can serve as a type
- Type by Map key: This allows you to use any JavaScript type as a subtype to further confiturations.

Factory objects can be any custom object type: 
- Object Literal
- Array
- Map
- Set
