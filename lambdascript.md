> ### *(WIP)*

<img src="https://github.com/julienetie/lambdascript/assets/7676299/81bd638a-1c90-4596-a48c-0a124fef1d68" alt="LambdaScript logo" width="250">

# λ LambdaScript


### A Vanilla JavaScript Standard for Modern Best Practices

> ### How to use this document
> _LambdaScript is not a comprehensive standard and does not encompass all aspects of JavaScript. Instead, it focuses on a specific subset of JavaScript that can enhance or detract from the efficiency of software development. This not only makes development more pragmatic but it also aims to make the LambdaScript document more consumable for beginners and experienced JavaScript developers alike._
>
>> ## _Concerns and features not part of the LambdaScript standard are left to discretion_
>
> There are two strategies for implementing LambdaScript in your source code:
> 1. **Strict LambdaScript**: All "imperative" and "canonical" conventions are strictly adhered to, while all "avoid" and "evade" features are considered obsolete.
> 2. **Flexible LambdaScript**: There are cases where you may need to exercise exceptions, but "impertative" features are upheld.
>
>These strategies prioritize consistency and flexibility, acknowledging that various projects may present challenges stemming from dependencies, objective constraints, JavaScript runtimes, and possibly differences in opinions among colleagues and collaborators. The LambdaScript standard was designed with collaboration, productiviy and performance in mind.
>
>#### When not to use LambdaScript
>LambdaScript is predomnantly for runtimes that support ECMAScript 2015 and above (ES6+). There are numerous JavaScript runtimes, some with only partial ES6 support. In such instances, it's crucial to exercise discretion to determine if LambdaScript will be beneficial. LambdaScript is not intended for legacy projects that utilize ECMAScript 5 (ES5) and earlier versions.

### What does LambdaScript consist of?
LambdaScript defines the following, all found within this document:

- A modern syntax style guide and linter setup
- Conventions for specific JavaScript features
- Essential Type Management
- Practical Functional Programming principles
- Conventions for JavaScript features to steer clear of or circumvent
- The utility library, [lambdascript.js](#)

### Why is Native JavaScript the Optimal Choice for JavaScript Runtimes?

- **Fastest Reloads Possible**: Native JavaScript development often achieves reload speeds hundreds or thousands of times faster than compiled solutions that use Babel or TypeScript. 
- **Ideal for Performance-Critical Development**: Optimization is nuanced. When working on performance-sensitive software, native JavaScript allows for more effective optimization strategies.
- **Substantial Impact**: Your code directly influences the end result. Unlike types in TypeScript, which are often removed during compilation.
- **Reduced Development Dependencies**: Native JavaScript can be written directly into a JavaScript runtime, resulting in a far simpler development setup when compared to typical compiled alternatives.

### Key 
JavaScript adheres to numerous standards, spanning decades in its ecosystem. This is why LambdaScript cannot enforce all conventions as mandatory.
However, prioritization can be based on encountered use cases, left to your discretion.

|Guidance   |Description  |
|:---------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| <img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable"> | Absolutely necessary and indispensable    |
| <img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">            | Preferred unless unattainable             |
| <img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">         | Refrain from encountering where possible  |
| <img src="https://img.shields.io/badge/Evade-eb4034" alt="Evade" title="Strongly encouraged to find a way to circumvent or escape">| Strongly encouraged to find a way to circumvent or escape |

### Areas of focus
- [1\. Use of ECMAScript](#1-use-of-ecmascript)
  - [1.1. The state of ECMAScript](#11-the-state-of-ecmascript)
  - [1.2. Working with ECMAScript 2015, ECMAScript 2016 and EcmaScript Next](#12-working-with-ecmascript-2015-ecmascript-2016-and-ecmascript-next)
  - [1.3. Polyfills](#13-polyfills)
  - [1.4. Exceptions](#14-exceptions)
 
- [2\. Standard JavaScript](#2-javascript-standard-style)
  - [2.1. Automatic Semicolon Insertion](#21-automatic-semicolon-insertion)
  - [2.2. Extending Standard JavaScript to the Decoupled Specification](#22-extending-standard-javascript-to-the-decoupled-specification)
    - [2.2.1. Allow Switch Statement Fallthrough](#221-allow-switch-statement-fallthrough)
    - [2.2.2. Enforce Single Quotes](#222-enforce-single-quotes)
    - [2.2.3. Allow Void](#223-allow-void)
<!--
- [3\. Modules]
  - [3.1. Use ES Modules](#31-use-es-modules)
  - [3.2. Use the .js extension]
  - [3.3. Use the ModuleSpecifier Query String]

- [4\. Variables]
  - [4.1. Use const]
  - [4.2. Use WeakRef for garbage collectable objects]

 - [5\. Dynamic Type Management] 
-->



[ecmaIntLink]: https://ecma-international.org

## 1. Use of ECMAScript 
ECMAScript is a standardized scripting language specification implemented by JavaScript. ECMAScript specifications are maintained by [Ecma International][ecmaIntLink], a standards organization, with input from various stakeholders in the industry. 

New versions of ECMAScript are released periodically. These updates introduce new features, syntax, and improvements to the language.

### 1.1. The state of ECMAScript
Several years preceding the introduction of LambdaScript standard, major web browsers and JavaScript runtimes had already demonstrated either complete or near-complete support for ECMAScript 2015 (ES6) and ECMAScript 2016 (ES7), While also demonstrating robust support for forthcoming ECMAScript Next standards. Expanding on this, less than 1% of all browsers in usage today are not evergreen.

- Given widespread support for recent ECMAScript versions in modern browsers, the need for transpilation to ES5 has diminished significantly.
- Use polyfills judiciously, giving priority to essential missing features. Opt for targeted polyfills instead of bundled polyfills when possible.
- Reserve ECMAScript compilation for rare edge cases where it's essential, minimizing its usage unless absolutely warranted.

### 1.2. Working with ECMAScript 2015, ECMAScript 2016 and EcmaScript Next
Fundamental ECMAScript features enjoy extensive support across major browsers and JavaScript platforms, guaranteeing compatibility with raw ECMAScript 2015 and subsequent versions at runtime, thereby obviating the necessity for compilation. To verify the broad adoption of a feature, consult the following resources:
- <a href="https://caniuse.com" target="_blank">Can I Use</a>
- <a href="https://developer.mozilla.org" target="_blank">MDN Web Doc</a>
- <a href="https://compat-table.github.io/compat-table/es6" target="_blank">ECMAScript 6 compatibility table</a>

### 1.3. Polyfill manually [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Polyfills should be included manually as necessary, rather than relying on polyfill libraries that contain multiple polyfills. It's also discouraged to use invalid syntax to support non-standard features. Excessive or non-standard syntax should be avoided as it's unlikely to enhance performance, maintainability, or the user experience.

### 1.4. Use ECMAScript 2015 and above [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Before reverting to legacy syntax, it's crucial to ascertain whether the platform you're developing for lacks sufficient support for ECMAScript 2015. Recognizing the limitations of your development platforms is paramount, as embracing newer standards can lead to significantly enhanced productivity.

## 2. JavaScript Standard Style with LambdaScript rules 
[![image](https://github.com/julienetie/decoupled-javascript/assets/7676299/b40f8fe6-2688-499e-bb53-ae8aacb2f5a6)](https://standardjs.com/)

[JavaScript Standard Style](https://standardjs.com/)

LambdaScript primarily adheres to the _JavaScript Standard Style_, renowned for its thoughtful design and high productivity, making it a fitting style guide for modern JavaScript codebases.

[asiLink]: https://tc39.es/ecma262/#sec-automatic-semicolon-insertion

### 2.1. Use Automatic Semicolon Insertion [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
[Automatic Semicolon Insertion](asiLink) (ASI) is a feature of ECMAScript often misconstrued in discussions about the necessity of semicolons. To truly grasp this capability, it's crucial to understand the following:

- ASI is an integral part of the [ECMAScript standard](asiLink) and is not a language mistake as often assumed.
- Valid Source code is not responsible for minification; instead, minifiers tokenize semicolons independently.
- ASI does not necessarily insert missing semicolons at the end of a line.

The last point is frequently misunderstood. ASI doesn't handle all semicolon insertions but **specifically ensures semicolons are inserted at the end of JavaScript sentences** where necessary.

In JavaScript, a sentence typically refers to a complete statement or expression that performs a specific action or computation. LambdaScript embraces ASI, as advocated by the JavaScript Standard Style.


In practice, ASI in JavaScript behaves similarly to programming languages that don't rely on end of sentence semicolons such as Golang, Ruby, and Swift, where semicolons may only be necessary in non-end-of-sentence scenarios.

### 2.2. Extending Standard JavaScript to support LambdaScript [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

In certain scenarios, the JavaScript Standard Style (JSS) may not fully align with the principles of LambdaScript. However, JSS offers flexibility by allowing extensions to accommodate such variations. 

Below is the LambdaScript extension for [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files-new):

_.eslintrc_
```json
{
    "extends": [
        "standard"
    ],
    "rules": {
        "no-fallthrough": [
            "off"
        ],
        "quotes": [
            2,
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "no-void": "off"
    }
}
```
_eslint.config.js_
```javascript
export default [
  {
    extends: [
      'standard'
    ],
    rules: {
      'no-fallthrough': 'off',
      'quotes': [
        2,
        'single',
        {
          'allowTemplateLiterals': true
        }
      ],
      'no-void': 'off'
    }
  }
]
```
#### 2.2.1 Allow Switch Statement Fallthrough
```json
{
    "rules": {
        "no-fallthrough": [
            "off"

```
"Fallthrough" is a frequently misunderstood aspect of ECMAScript, sometimes perceived as an anomaly within the language due to its absence in other programming languages. Although the term "fallthrough" is not officially defined in the specification, its concept can be elucidated.

Fallthrough entails the sequential execution of subsequent CaseClause blocks until encountering a break, return, or throw statement. If this behavior is undesired, any of these control keywords can be utilized to terminate the flow. Additionally, break statements can be employed with labels to manage flow within nested switch statements.

In the context of LambdaScript, fallthrough is perceived as a valuable feature.


#### 2.2.2 Enforce Single Quotes

```json
{
    "rules": {
        "quotes": [
            2,
            "single",
            {
                "allowTemplateLiterals": true
            }
```
Utilizing single quotes in JavaScript primarily aligns with the preference of LambdaScript for maintaining consistency throughout codebases. However, it's essential to recognize that this choice is largely discretionary, and adhering to it is not a hard rule. The above configuration snippet tells ESLint to enforce the use of single quotes (') for strings in your code with an exception for template literals (backticks ``)

#### 2.2.3 Allow Void
```json
{
    "rules": {
        "no-void": "off"
```

`void` is a JavaScript keyword that has largely been unnecessary since it returns undefined, which is the default return of the function context. However, with the introduction of Arrow Functions, void gains usefulness by enabling the omission of implicit returns in single-line arrow function syntax.

```javascript
const a = (b, c) => void b(c ** 2)

const d = a(console.log,5) // Logs 25

console.log(d) // Logs undefined
```

## 3. Modules
The script tag feature of JavaScript Modules, also known as ECMAScript Modules (ES modules), attained full browser support in early 2018 and stable Node.js support in 2019.
The adoption of ES modules is steadily increasing, while traditional CommonJS usage is gradually decreasing. 

### 3.1. Use ES Modules [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Embracing ES modules in JavaScript is crucial for several reasons:

- Tooling Harmony: One module system means simpler tooling across the entire JavaScript landscape.
- Code Sharing Made Easy: Share code across projects effortlessly with a single, unified system.
- Performance Boost: ES modules' static structure allows for faster parsing and dependency resolution.
- Standardized Power: Backed by the ECMAScript spec, ES modules guarantee consistent behavior everywhere.
- Granular Imports: Import only the specific components you need with named exports and imports.
- Dynamically Loaded: Load modules on-demand for improved performance and scalability in your applications.
- Clear Dependencies: Reason about module dependencies with ease thanks to the static dependency graph.
- Future-Proof: Stay ahead of the curve by using ES modules, which align with the future of JavaScript.

### 3.2 Use the .js extension [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
The ".mjs" file extension was introduced to clearly distinguish files containing ECMAScript Modules (ES modules) syntax from those containing CommonJS module syntax, which typically use the ".js" extension.

However, with the increasing adoption and support for ES modules, the necessity to explicitly differentiate between the two module strategies diminishes. As ES modules become more prevalent, there will likely be little practical benefit in enforcing this distinction.

### 3.3. Use Import Maps [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Import Maps offer a streamlined way to associate module-specifiers (URLs) with designated names. Import Maps are supported across all major browsers. 
In the browser context you can import ES modules using `type="module"` in a script tag or by utilizing Import Maps.


A common misconception regarding Import Maps is that the loading performance of multiple files is significantly slower when compared to a single bundle or code-split modules; however, this is not entirely accurate in practice.

- Reduced Initial Load: Import Maps ensure users only download code for the specific page, minimizing the initial load compared to single bundles that require a full download.
- Selective Loading: Import Maps enable loading only what the page necessitates, thus avoiding the loading of unused code present in a single bundle.
- Efficient Updates: For returning visitors, only files that have changed (e.g., with a new filename hash) will be downloaded. In contrast, a single bundle would necessitate a full download regardless of the extent of changes.
- Simplified Implementation: Import Maps eliminate the need for boilerplate logic of some single bundles and code-split modules.
- No duplicated code: Code-splitting can occasionally result in duplicated shared dependencies.

In real-world usage, many of the modularity and caching benefits of Import Maps make up for the performance degradation compared to the use of single bundles and code-split modules. All the aforementioned concerns are mostly negligible for small projects. However, large-scale projects may require a more comprehensive evaluation of resource loading to find a good balance between the size of modules and the number of modules to include.

Managing ES modules natively in large-scale projects (projects with dozens of modules) without the use of Import Maps can become tedious:
- URLs will need to be updated for all instances of the same module specifiers, as well as their filename hashes.
- Managing ModuleSpecifier query strings is impractical, as it requires a hierarchical domino effect of changes for nested modules.

Import Maps also introduces scoping which has conditional and security benefits that are not possible without use of the specification.

## 4. Variables

### 4.1. Use const for variables that are not reassigned [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
If a variable will not be reassigned during it's lifetime it should be declared using `const`.
Usage of const can help to catch unintended mutations early in the development process, leading to cleaner and more maintainable code.

### 4.2. Use WeakRef for garbage collectable objects  [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)

An object won't qualify for garbage collection unless there are no remaining references, or the remaining reference is held within a reference type like WeakRef, WeakMap, or WeakSet. When referencing an object that might be removed or is no longer referenced by any parts of the codebase during execution, it's advisable touse a weakly referenced type.

Utilize WeakRef for assigning variables to objects that will require dereferencing during the execution lifetime.

## 5. Types
JavaScript features type coercsion which can sometimes often become a footgun if not managed accordingly. Quirks abound in JavaScript's type system. However, dynamic types in JavaScript are entirely manageable, and there are practices to mitigate common issues when exposing results.

### 5.1. Safeguard final values [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)

Use conditional statements to shield end-users from encountering undesirable output values. The rule the prevent this is to treat 

> ### All final values are potential non-values.

A final value should be regarded as a value intended for consumption by end-users or as the outcome of a public or third-party API.
This convention is intended as a paramount JavaScript best practice, essential for competently delivering content. 
NaN, undefined, and null are the undesirable values that safeguarding helps to mitigate against.

#### 5.1.1. Safeguard string
Display a placeholder for a type mismatch when anticipating a text value.

```javascript
safe.str(value, placeholder)
```

#### 5.1.2. Safeguard number
Display a placeholder for a type mismatch when anticipating a numeric value.

```javascript
safe.number(value, placeholder)
```

#### 5.1.2. Safeguard integer
Display a placeholder for a type mismatch when anticipating an integer value.

```javascript
safe.int(value, placeholder)
```
### 5.2. Compare using the strict equality operator [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key) 
Employing the strict equality operator for all operand comparisons aims to enforce consistency and predictability, which is likely to result in enhanced type safety, particularly in large-scale projects. Whilst the loose-equality operator can serve adequately for testing various types, with or without coercion, strict equality provides greater predictability by mandating both value and type to match.
```javascript
leftOperand === rightOperand
```

### 5.3. Use rectified typechecking [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
There are various ways to check common types in JavaScript, but the standard approach might not always align with general-purpose intentions.
Below illustrates common types with type checks, refined for broader utility.

#### isArray
```javascript
Array.isArray(value)
```
#### isBigInt
```javascript
typeof value === 'bigint'
```
#### isBoolean
```javascript
typeof value === 'boolean'
```
#### isFunction
```javascript
typeof value === 'function'
```
#### isInteger
```javascript
Number.isInteger(value)
```
#### isNaN
```javascript
Number.isNaN(value)
```
#### isNumeric
```javascript
typeof value === 'number' && !Number.isNaN(value)
```
#### isNull
```javascript
value === null
```
#### isObject
```javascript
vlaue !== null && typeof value === 'object' && !Array.isArray(value)
```
#### isString
```javascript
typeof value === 'string'
```
#### isSymbol
```javascript
typeof value === 'symbol'
```
#### isUndefined
```javascript
value === undefined
```
#### isNonValue (NaN, null or undefined)
```javascript
value === undefined || value === null || Number.isNaN(value)
```

> ### Arbritrary type-checking
> These type checks can occasionally yield undesired outcomes.
>
> #### isNumber (Including numerical and NaN types) 
> ```javascript
> typeof value === 'number'
> ```
>
> #### isAnyObject (Including null and array)
> ```javascript
> typeof value === 'object'
> ```
  

### 5.4. Use reliable conditinal statements [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
Use conditional statemenets with reliable typechecking. 

#### 5.4.1 Common Falsy and Truthy Types
Unchecked values are not consistently reliable and remain among the primary culprits for type errors in JavaScript development.
```javasscript
if(value)
```
The above condition could be deemed acceptable as potentially truthy, provided you understand what evaluates as true.

- All numbers except 0 and NaN
- All BigInt except 0n
- All strings except empty strings ''
- All other primitive values except undefined and false
- All objects except null
- Functions
- And of course true

```javasscript
if(value)
```
It could also be seen as potentially falsy if we expect:
- 0
- NaN
- 0n
- ''
- undefined
- null
- false

There isn't a clear-cut inverse rule. It's crucial never to assume that a dynamic value will always be of the type you expect.

### 5.5 Use Void
TBA

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

## 7. Exception Handling
TBA

## 8. Global Store
Global state in JavaScript poses challenges due to its high mutability. ECMAScript has evolved to mitigate these challenges by introducing stricter constructs.

Modules offer a way to share functions and data, but sometimes there's a need for a global source of truth to share real-time changes across the JavaScript execution environment. This is achievable by using an exported object, reffered to as `_store` by filename `_store.js`, to be imported by any module needing to read or write to its properties.

LambdaScript follows these conventions for a global store:

1. There should be one global store named _store, exported as an object literal from _store.js.
2. It should contain predefined properties and nested properties as necessary.
3. _store is solely a data store and should not include any functions or additional functionality.
4. _store is primarily for state shared between multiple modules. It may not suffice as a complete state management solution, since it lacks mechanisms such as subscribing to changes but it can serve as state manaement for minor usage.
5. Default types should be assigned to properties using syntax where possible.

// @ tba example store

## 8. Development and distribution
In theory, the LambdaScript you write should be capable of run directly on your target runtime, with or without the aid of development tooling. This is a recommended reference point that allows for: 
- Reduced risk of vendor lock-in.
- Increased flexibility for future migrations.
- Improved predictability,
- Can assist in rectifying issues in build pipelines.

### 8.x. Minification
LambdaScript permits Minification since it does not alter the indended composition of your source code. Minification can also be beneficial for optimising parsing performance.

### 8.x. Bundling without compiling
The batching and bundling of modules can help in areas where large numbers of modules are counter-productive for resource loading. It's advisable that, when doing so, the source code contained remains unchanged.

### 8.x. Undesirable development processes
- Transpiling/Compiling: Involves integrating other languages or versions of JavaScript.
- Opinionated code formatters that deviate from LambdaScript standards.
- Excessive boilerplate code.
- Any changes that disrupt the intended structure of the source code.
- Bundled code splitting: Although code-splitting can be beneficial, it may sometimes lead to duplicated shared dependencies and unnecessary boilerplate code.


## 8. Outdated Language Constructs
This is a list of language constructs to either avoid or evade in JavaScript when adhering to LambdaScript standards. While there may be situations where avoiding or evading the use of an outdated language construct is challenging, it's recommended to de-emphasize its usage rather than considering it completely obsolete.

### 8.1 `__proto__` [<img src="https://img.shields.io/badge/Evade-eb4034" alt="Evade" title="Strongly encouraged to find a way to circumvent or escape">](#key)

### 8.2 `apply` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.3 `bind` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.4 `call` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.5 `class` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.6 `constructor` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.7 `function` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.x `get` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.x `set` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.8 `Object.freeze()` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.9 `Object.seal()` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.10 `prototype` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

### 8.11 `new` user-defined-constructor [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)
The `new` keyword used with a user-defined-constructor should be avoided as it introduces context-based programming. 

> #### Rationale:
> Using new with user-defined constructors in JavaScript can lead to unexpected behavior and complexities due to prototypal inheritance and potential pitfalls. While constructors are a common approach, alternatives like factory functions offer clearer and safer ways to create objects. 
>>
>> #### Alternative:
>> The following alternative strategies are recommended for achieving a similar outcome to creating object instances.
>> - Currying: TBA
>> - Partial Application: TBA
>> - Factory functions: TBA

### 8.12 `this` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)
The this keyword should be avoided as it promotes brittle coding styles, introducing multiple contexts that lead to challenging edge cases and exception handling for codebases of all sizes.

> #### Rationale:
> The use of context-based programming in JavaScript can lead to brittle code because it often relies on implicit dependencies and mutable state. This approach can make the code difficult to understand, maintain, and refactor, as changes in one part of the codebase can unexpectedly affect other parts due to the shared context.
>
> Additionally, context-based programming in JavaScript often involves tightly coupling different components or modules, making it challenging to isolate and test individual units of code. This lack of modularity can further contribute to brittleness, as changes to one module may inadvertently break functionality in other modules.
>
> Overall, the reliance on mutable state and implicit dependencies in context-based programming can make the codebase fragile and prone to unexpected behavior, making it harder to maintain and evolve over time.
>>
>> #### Alternative:
>> LambdaScript advocates for the following alternatives to reliably share state across a codebase.
>> - **[Global Store](#)**: tba
>> - **State management**: tba
>> - **Polymorphic Functions**: tba
>> - **Encapsulation**: tba

### 8.13 `var` [<img src="https://img.shields.io/badge/Evade-eb4034" alt="Evade" title="Strongly encouraged to find a way to circumvent or escape">](#key)
The `var` keyword should no longer be used within ECMAScript 2015+ based codebase.
>>
[letLink]:https://caniuse.com/let
[constLink]:https://caniuse.com/const
> #### Rationale:
> - **Function Scoped**: Variables declared with `var` are function-scoped, which can introduce unexpected behaviors and potential bugs, especially in large codebases.
> - **Hoisted**: Variables declared with `var` are hoisted to the top of their scope during the compilation phase and initialized with a value of `undefined` before the actual declaration is encountered. This behavior can make it difficult to understand the flow of the code.
> - **Global Scope Pollution**: When `var` is used outside of a function, the variable is assigned to the global scope. This can lead to variable name collisions and unintended side effects.
> - **No Block Scope**: Unlike `let` and `const`, variables declared with `var` do not have block scope. This means they are not confined to the nearest enclosing block (such as if statements or loops), but rather to the nearest function scope. This lack of block scoping can lead to issues with variable leakage and unintended modifications.
> - **Redeclarable**: Variables declared with `var` can be redeclared within the same scope without any warning or error. This can lead to accidental reassignments and difficult-to-debug code.
> >
> >  #### Alternative:
> >  - Use `const` for immutable primitive values and constant object references.
> >  - Use `let` for values that are reassigned.
> >
> > [let](#letLink) and [const](#constLink) have been fully supported in all major browsers since 2017.

-------------
## FAQ

[#olcLink]:#8-outdated-language-constructs
### Do I have to use functional programming paradigms to write valid LambdaScript?
> You don't need to strictly adhere to functional programming paradigms to write valid LambdaScript. While LambdaScript isn't a full-fledged functional programming standard, it emphasizes both procedural and functional programming styles.The extent to which you incorporate functional or procedural programming paradigms is entirely up to you or your team as long as you adhere to the guidelines set by the [Outdated Language Constructs](olcLink).

### Why is it called LambdaScript?
> This standard is named LambdaScript because it heavily emphasizes the use of arrow functions, also known as lambda functions. While lambda calculus can be achieved within the conventions of LamdbaScript, it's not recommended to write entire codebases predominantly in the style of lambda calculus for general-purpose programming, as it may introduce maintainability issues as well as potentially impacting performance in some cases.

### Why does LambdaScript lack several functional programming concepts?
> The LambdaScript standard was designed to complement JavaScript's strengths rather than to coerce it into a full-fledged functional programming language. JavaScript is a pseudo-functional programming language, lacking some core FP features found in programming languages such as Haskell and Scala. The beauty of LambdaScript lies in its ability to create elegant code with just a few utility functions, without requiring a new syntax or compiler.

### What is the purpose of LambdaScript?
> LambdaScript is a standard for writing modern JavaScript in an efficient and declarative manner. It places a strong emphasis on preventing tightly-coupled code, commonly found in context-based programming, which is prevalent in JavaScript. LambdaScript improves the JavaScript development experience by encouraging and enforcing certain styles while avoiding outdated practices.
>
> Some of the benefits to using LamdaScript includes:
> - **Decoupled Code**: Write JavaScript without practices that encourage brittle code.
> - **Practical Functional Programming**: Utilize a subset of functional programming concepts without going overboard.
> - **Practical Procedural Programming**: Also work in a procedural fashion and leverage the standard's constraints.
> - **Consistency for Teams**: A standard for Vanilla JavaScript to increase consistency in codebases and aid code reviews.
> - **A Minimalist Programming Style**: Lowers JavaScript's core verbosity to increase productivity, making the fundamentals analogous to Golang, Lua, and Zig in terms of minimalism.
> - **Native Usage**: Provides a strategy for native JavaScript development for modern JavaScript runtimes.
> - **Valid JavaScript**: No new syntax to learn, no compilers.
> - **Type Management Solution**: A general-purpose type-management standard.
