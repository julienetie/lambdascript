# LambdaScript

Decoupled JavaScript standard delineates clear conventions for crafting loosely-coupled JavaScript code using a procedural and partially-functional approach.

### Goal
Decoupled JavaScript aims to:
- Establish a contemporary standard, excluding detrimental practices and misconceptions.
- Eliminate practices that lead to brittle codebases.
- Enhance productivity
- Direct developers' attention towards meaningful paradigms.
- Resolve the ambiguity in different problem-solving approaches in JavaScript.
- Establish Decoupled JavaScript as a best practice reference for Vanilla JavaScript.

### Key 
JavaScript adheres to numerous standards, spanning decades in its ecosystem. This is why LambdaScript cannot enforce all conventions as mandatory.
However, prioritization can be based on encountered use cases, left to your discretion.

|Guidance   |Description  |
|:---------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| <img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable"> | Absolutely necessary and indispensable    |
| <img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">            | Preferred unless unattainable             |
| <img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid">                                                          | Refrain from encountering where possible  |
| <img src="https://img.shields.io/badge/Evade-eb4034" alt="Evade">                                                          | Strongly encouraged to find a way to circumvent or escape |


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

- [3\. Modules]
  - [3.1. Use ES Modules](#31-use-es-modules)
  - [3.2. Use the .js extension]
  - [3.3. Use the ModuleSpecifier Query String]

- [4\. Variables]
  - [4.1. Use const]
  - [4.2. Use WeakRef for garbage collectable objects]

- [5\. Dynamic Type Management] 

    11.1. Truthy Types 
   
    11.2. Falsy Types 
   
    11.3. Non-values 
    
    - 11.3.1. NaN 
      
    - 11.3.2. Null 
      
    - 11.3.3. Undefined 
   
    11.4. Objects 
   
    11.5. Arrays 
   
   11.6. Numbers
 
 
- 3\. Arrow Functions

    1.1. Partial Application 

    1.2. Currying 

    1.3. Compose and Pipe 

    1.4. Recursion 

4. Void 

- [4\. Conditional Statements]()

5. Modules 


7. Avoid or circumvent 

    7.1. Function Declarations 

    7.2. this 

    7.3. bind 

    7.4. call 

    7.5. apply 

    7.6. new (For user-defined function instances) 

    7.7. prototype 

    7.8. constructor 

    7.9. Object.create

    7.10 var

    7.11 Object.freeze (Avoid for functional code)

9. Exception Handling 

    8.1. Logging errors and warnings 

10. Safeguarding 

   10.1. Safeguarding numbers 

   10.2. Safeguarding strings 

11. Type Management 

    11.1. Truthy Types 
   
    11.2. Falsy Types 
   
    11.3. Non-values 
    
    - 11.3.1. NaN 
      
    - 11.3.2. Null 
      
    - 11.3.3. Undefined 
   
    11.4. Objects 
   
    11.5. Arrays 
   
   11.6. Numbers

[ecmaIntLink]: https://ecma-international.org

## 1. Use of ECMAScript 
ECMAScript is a standardized scripting language specification implemented by JavaScript. ECMAScript specifications are maintained by [Ecma International][ecmaIntLink], a standards organization, with input from various stakeholders in the industry. 

New versions of ECMAScript are released periodically. These updates introduce new features, syntax, and improvements to the language.

### 1.1. The state of ECMAScript
Several years preceding the introduction of Decoupled JavaScript standard, major web browsers and JavaScript runtimes had already demonstrated either complete or near-complete support for ECMAScript 2015 (ES6) and ECMAScript 2016 (ES7), While also demonstrating robust support for forthcoming ECMAScript Next standards. Expanding on this, less than 1% of all browsers in usage today are not evergreen.

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

Decoupled JavaScript primarily adheres to the _JavaScript Standard Style_, renowned for its thoughtful design and high productivity, making it a fitting style guide for modern JavaScript codebases.

[asiLink]: https://tc39.es/ecma262/#sec-automatic-semicolon-insertion

### 2.1. Use Automatic Semicolon Insertion [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
[Automatic Semicolon Insertion](asiLink) (ASI) is a feature of ECMAScript often misconstrued in discussions about the necessity of semicolons. To truly grasp this capability, it's crucial to understand the following:

- ASI is an integral part of the [ECMAScript standard](asiLink) and is not a language mistake as often assumed.
- Valid Source code is not responsible for minification; instead, minifiers tokenize semicolons independently.
- ASI does not necessarily insert missing semicolons at the end of a line.

The last point is frequently misunderstood. ASI doesn't handle all semicolon insertions but **specifically ensures semicolons are inserted at the end of JavaScript sentences** where necessary.

In JavaScript, a sentence typically refers to a complete statement or expression that performs a specific action or computation. Decoupled JavaScript embraces ASI, as advocated by the JavaScript Standard Style.


In practice, ASI in JavaScript behaves similarly to programming languages that don't rely on end of sentence semicolons such as Golang, Ruby, and Swift, where semicolons may only be necessary in non-end-of-sentence scenarios.

### 2.2. Extending Standard JavaScript to support LambdaScript [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

In certain scenarios, the JavaScript Standard Style (JSS) may not fully align with the principles of Decoupled JavaScript. However, JSS offers flexibility by allowing extensions to accommodate such variations. 

Below is the Decoupled JavaScript extension for [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files-new):

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

In the context of Decoupled JavaScript, fallthrough is perceived as a valuable feature.


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
Utilizing single quotes in JavaScript primarily aligns with the preference of Decoupled JavaScript for maintaining consistency throughout codebases. However, it's essential to recognize that this choice is largely discretionary, and adhering to it is not a hard rule. The above configuration snippet tells ESLint to enforce the use of single quotes (') for strings in your code with an exception for template literals (backticks ``)

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
!(value === undefined || value === null || Number.isNaN(value))
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

### 6.2 Currying

### 6.3 Partial Application

### 6.4 Composition

### 6.5 Recursion

### 6.6 Lazy Evaluation

### 6.7 Enclosed Values

### 6.8 Enclosed functions

### 6.9 Inheritance and Subtype Polymorphism
