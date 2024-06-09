> ### *(WIP)* en-us

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

### The Advantages of Utilizing Native JavaScript for JavaScript Development
JavaScript, in its native form, stands as the unparalleled choice for crafting JavaScript applications and libraries. Here's why:

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
 - 1\. [**Adopting Native ECMAScript Next**](#1-adopting-native-ecmascript-next)
     
     - 1.1. [The Current State of ECMAScript](#11-the-current-state-of-ecmascript)
     
     - 1.2. [Determining Browser and Platform Support for ECMAScript](#12determining-browser-and-platform-support-for-ecmascript)
     
     - 1.3. [Polyfill As Needed](#13-polyfill-as-needed-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
     
     - 1.4. [Utilizing ECMAScript 2015 and Beyond](#14-utilizing-ecmascript-2015-and-beyond)
       
- 2\. [**LambdaScript Linting and Commenting**](#2-lambdascript-linting-and-commenting)
     
     - 2.1. [Use Extended JavaScript Standard Style](#21-use-extended-javascript-standard-style-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
          - 2.1.1. [Allow Switch Statement Fallthrough](#211-allow-switch-statement-fallthrough-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
      
          - 2.1.2. [Single Quotes](#212-single-quotes)
      
          - 2.1.3. [Allow Void](#213-allow-void-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
            
     - 2.2. [Use Automatic Semicolon Insertion](#22-use-automatic-semicolon-insertion-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

     - 2.3. [JSDoc Type Checking](#23-jsdoc-type-checking)
       
- 3\. [**Modules**](#modules)

     - 3.1. [Use ES Modules](#31-use-es-modules-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
 
     - 3.2. [Use the .js Extension](#32-use-the-js-extension-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
     
     - 3.3. [Use Import Maps for Browser Development](#33-use-import-maps-for-browser-development-) [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

- 4\. [**Variables**](#4-variables) 
     
     - 4.1. [Use const for variables that are not reassigned](#41-use-const-for-variables-that-are-not-reassigned-) [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
      

- 5\. [**Types**](#5-types)

     - 5.1. [Safeguard Final Values](#51-safeguard-final-values-) [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
 
     - 5.2. [Compare Using the Strict Equality Operator](#52-compare-using-the-strict-equality-operator-) [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
 
     - 5.3. [Use Rectified Type Checking](#53-use-rectified-type-checking-) [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)


- 6\. [**Objects**](#6-objects)
     
     - 6.1. [Classify Objects Using instanceof](#61-classify-objects-using-instanceof-) [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
 
- 7\. [**Void**](#7-void)

     - 7.1. [Do not void multiple operands](#71-do-not-void-multiple-operands-) [<img src="https://img.shields.io/badge/Evade-eb4034" alt="Evade" title="Strongly encouraged to find a way to circumvent or escape">](#key)

  
- Conditional Statements

- [[[ Lambda Functions ]]]

- Exception Handling

- 10\. [**State Management**](#10-state-management)


- 11\. [**Templating**](#11-templating)


- Development and Distribution

- Avoidable and Evadable Language Constructs


[ecmaInt]: https://ecma-international.org
[evergreen]: https://www.w3.org/2001/tag/doc/evergreen-web
[es6]: https://262.ecma-international.org/6.0/
[es7]: https://262.ecma-international.org/7.0/
[polyfills]: https://www.w3.org/2001/tag/doc/polyfills/
## 1. Adopting Native ECMAScript Next
JavaScript implements the ECMAScript standardized scripting language specification. ECMAScript specifications are maintained by [Ecma International][ecmaInt], a standards organization, with input from various stakeholders in the industry.

New versions of ECMAScript are released periodically. These updates introduce new features, syntax, and improvements to the language. ECMAScript Next embodies [ECMAScript 2015 (ES6)](#es6) and subsequent iterations, effectively establishing it as an evolving standard.

### 1.1. The Current State of ECMAScript
> ## _Given its extensive global support, ECMAScript obviates the necessity for compilation or transpilation as a prerequisite for JavaScript development_

Several years preceding the introduction of LambdaScript standard, major web browsers and JavaScript runtimes had already demonstrated either complete or near-complete support for ECMAScript 2015 (ES6) and [ECMAScript 2016 (ES7)](#es7), While also demonstrating robust support for forthcoming ECMAScript Next standards. Expanding on this, less than 1% of all major browsers in usage today are not [evergreen](evergreen). With the broad adoption of recent ECMAScript versions across modern browsers, the need for transpilation to ES5 has diminished significantly.

- Use polyfills judiciously, giving priority to essential missing features. Opt for targeted polyfills instead of bundled polyfills when possible.
- Reserve ECMAScript compilation for rare edge cases where it's essential, minimizing its usage unless absolutely warranted.

### 1.2.Determining Browser and Platform Support for ECMAScript
Fundamental ECMAScript Next features enjoy extensive support across major browsers and JavaScript platforms, guaranteeing compatibility with raw ECMAScript 2015 and subsequent versions at runtime, thereby obviating the necessity for compilation. To verify the broad adoption of a feature, consider consulting the following resources:
- <a href="https://caniuse.com" target="_blank">Can I Use</a>
- <a href="https://developer.mozilla.org" target="_blank">MDN Web Doc</a>
- <a href="https://compat-table.github.io/compat-table/es6" target="_blank">ECMAScript 6 compatibility table</a>
- <a href="https://nodejs.org/en/learn/getting-started/ecmascript-2015-es6-and-beyond" target="_blank" >Node.js:ECMAScript 2015 (ES6) and beyond</a>

### 1.3. Polyfill As Needed [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
[Polyfills](#polyfills) should be included manually as necessary, rather than relying on polyfill solutions that can sometimes include several unecessary polyfills. It's also discouraged to use invalid syntax to support non-standard features. Excessive or non-standard syntax should be avoided as it's unlikely to enhance performance, maintainability, or the user experience.

### 1.4. Utilizing ECMAScript 2015 and Beyond
Before reverting to legacy syntax, it's crucial to ascertain whether the platform you're developing for lacks sufficient support for ECMAScript 2015. Recognizing the limitations of your development platforms is paramount, as embracing newer standards can lead to significantly enhanced productivity and performance.

## 2. LambdaScript Linting and Commenting
LambdaScript strives to ensure consistency across projects, whether developed by individuals or sizable teams. While documentation serves as a valuable resource, enforcing coding styles is essential to enhancing development speeds and minimizing the need for extensive code reviews. Below are the tools and guides that LambdaScript has adopted to facilitate the maintenance of coding conventions.

### 2.1. Use Extended JavaScript Standard Style [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

[![image](https://github.com/julienetie/decoupled-javascript/assets/7676299/b40f8fe6-2688-499e-bb53-ae8aacb2f5a6)](https://standardjs.com/)

[JavaScript Standard Style](https://standardjs.com/)

LambdaScript primarily adheres to the _JavaScript Standard Style_, renowned for its thoughtful design, making it a fitting style guide for modern JavaScript codebases.
In certain scenarios, the JavaScript Standard Style (JSS) may not fully align with LambdaScript's principles. Therefore, it's necessary to adjust the eslint configuration to better align with LambdaScript's criteria.

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

#### 2.1.1 Allow Switch Statement Fallthrough [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

```json
{
    "rules": {
        "no-fallthrough": [
            "off"

```
"Fallthrough" is a frequently misunderstood aspect of ECMAScript, sometimes perceived as an anomaly within the language due to its absence in other programming languages. Although the term "fallthrough" is not officially defined in the specification, its concept can be elucidated.

Fallthrough entails the sequential execution of subsequent CaseClause blocks until encountering a break, return, or throw statement. If this behavior is undesired, any of these control keywords can be utilized to terminate the flow. Additionally, break statements can be employed with labels to manage flow within nested switch statements.

In the context of LambdaScript, fallthrough is perceived as a valuable feature.


#### 2.1.2 Single Quotes

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

#### 2.1.3 Allow Void [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)

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

[asiLink]: https://tc39.es/ecma262/#sec-automatic-semicolon-insertion
### 2.2. Use Automatic Semicolon Insertion [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
[Automatic Semicolon Insertion](asiLink) (ASI) is a feature of ECMAScript often misconstrued in discussions about the necessity of semicolons. To truly grasp this capability, it's crucial to understand the following:

- ASI is an integral part of the [ECMAScript standard](asiLink) and is not a language mistake as often assumed.
- Valid Source code is not responsible for minification; instead, minifiers tokenize semicolons independently.
- ASI does not necessarily insert missing semicolons at the end of a line.

The last point is frequently misunderstood. ASI doesn't handle all semicolon insertions but **specifically ensures semicolons are inserted at the end of JavaScript sentences** where necessary.

In JavaScript, a sentence typically refers to a complete statement or expression that performs a specific action or computation. LambdaScript embraces ASI, as advocated by the JavaScript Standard Style.


In practice, ASI in JavaScript behaves similarly to programming languages that don't rely on end of sentence semicolons such as Golang, Ruby, and Swift, where semicolons may only be necessary in non-end-of-sentence scenarios.

### 2.3. JSDoc Type Checking
JSDoc comments provide an effective means to type-check your JavaScript code within your editor using the Language Service Protocol (LSP). Text editors like VSCode and NeoVim, equipped with the TypeScript extension, can leverage JSDoc to enable seamless type-checking for JavaScript. For further insights, refer to section ?.?.


## 3. Modules
The _type module_ feature of the script tag, also known as ECMAScript Modules (ES modules), attained full browser support in early 2018 and stable Node.js support in 2019.
The adoption of ES modules is steadily increasing, while traditional CommonJS usage is on a gradual decline in terms of usage. ECMAScript modules stand as the sole formal standard for module systems in JavaScript and should be prefered over alternative module solutions.

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

### 3.2 Use the .js Extension [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
The ".mjs" file extension was introduced to clearly distinguish files containing ECMAScript Modules (ES modules) syntax from those containing CommonJS module syntax, which typically use the ".js" extension.

However, with the increasing adoption and support for ES modules, the necessity to explicitly differentiate between the two module strategies diminishes. As ES modules become more prevalent, there will likely be little practical benefit in enforcing this distinction.

### 3.3. Use Import Maps for Browser Development [<img src="https://img.shields.io/badge/Canonical-34b1eb" alt="Canonical" title="Preferred unless unattainable">](#key)
Import Maps offer a streamlined way to associate module-specifiers (URLs) with designated names there are several benefits to using Import Maps:

- Shorthand module names: Simplify referencing modules across your site by using shorthand names instead of full URLs.
- Cache busting individual modules: Update only modified files without requiring users to re-download the entire codebase.
- Reduce script-tag clutter: Minimize the number of script tags in your HTML documents for cleaner code organization.
- Scoped imports: Achieve polymorphic behavior by allowing different imports of the same reference based on the specified path.
- Security through scoping: Modules scoped within specific contexts cannot be accessed by other modules outside of that scope.

Despite their HTML-based syntax, Import Maps offer solutions beyond the capabilities of JavaScript bundlers. Fortunately, Import Maps are supported by all major browsers, providing a standardized solution for managing module dependencies.

The prevailing notion surrounding Import Maps performance often leads to concerns being misdirected. Although Import Maps may not match the loading performance of a single bundled file, they offset this difference in performance through various means.

- Reduced Initial Load: Import Maps can ensure users only download code for the specific page, vastly minimizing the initial load compared to single bundles that require a full download.
- Selective Loading: Import Maps enable loading only what the page necessitates, thus avoiding the loading of unused code present in a single bundle.
- Efficient Updates: For returning visitors, only files that have changed (e.g., with a new filename hash) will be downloaded. In contrast, a single bundle would necessitate a full download regardless of the extent of changes.
- Simplified Implementation: Import Maps eliminate the need for boilerplate logic of some single bundles and code-split modules.
- No duplicated code: Code-splitting can occasionally result in duplicated shared dependencies.


Many of the aforementioned details may be negligible for small-scale projects. Though, large-scale projects may require a more comprehensive evaluation of resource loading to find a good balance between the size of modules and the number of modules to include.

## 4. Variables

### 4.1. Use const for variables that are not reassigned [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
If a variable will not be reassigned during it's lifetime it should be declared using `const`.
Usage of const can help to catch unintended mutations early in the development process, leading to cleaner and more maintainable code.


## 5. Types

JavaScript is a dynamically typed language, implying that variable types are inferred upon assignment, and static type checking is absent. Instead, JavaScript handles type mismatches through a feature called type coercion, which can often become a footgun if not managed accordingly. Quirks abound in JavaScript's type system. However, dynamic types in JavaScript are entirely manageable, and there are practices to mitigate common issues when exposing results.

### 5.1. Safeguard Final Values [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)

Use conditional statements to shield end-users from encountering undesirable final values.  

> ### All final values are potential non-values.

A final value should be regarded as a value intended for consumption by end-users or as the outcome of a public or third-party API.
This convention is intended as a paramount JavaScript best practice, essential for competently delivering content. 
NaN, undefined, and null are the undesirable values that safeguarding helps to mitigate against.

#### Safeguard string
Display a placeholder for a type mismatch when anticipating a text value.

```javascript
safe.str(value, placeholder)
```

#### Safeguard number
Display a placeholder for a type mismatch when anticipating a numeric value.

```javascript
safe.number(value, placeholder)
```

#### Safeguard integer
Display a placeholder for a type mismatch when anticipating an integer value.

```javascript
safe.int(value, placeholder)
```

### 5.2. Compare Using the Strict Equality Operator [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key) 
Employing the strict equality operator for all comparisons aims to enforce consistency and predictability, which is likely to result in enhanced type safety, particularly in large-scale projects. Whilst the loose-equality operator can serve adequately for testing various types, with or without coercion, strict equality provides greater predictability by mandating both value and type to match.
```javascript
leftOperand === rightOperand
```

### 5.3. Use Rectified Type Checking [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
There are various ways to check common types in JavaScript, but the standard approach might not always align with general-purpose intentions.
Below illustrates common types with type checks, rectified for broader utility.

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
> #### any
> ```javascript
> // The absence of type-checking, you don't need to do anything
> ```

### 5.4. Handel Rectified Type Mismatch 
Programming for dynamic types in JavaScript often requires ensuring types are as expected and managing mismatched types when they occur. LambdaScript recommends three ways to manage type mismatches:

- By console error
- By console warning
- Conditionally

Mismatched types are not necessarily runtime errors and should not disrupt the flow of the program unless there's a good reason to. LambdaScript provides a mis function to help manage potential mismatched types.

```javascript
import { string, array, _function, numeric } from './lambdascript.js'

// Logs an error message if the value is not a string or array.
mis(value, string, array).error(errorMessageFunction)

// Logs a warning message if the value is not either a function, numeric or null.
mis(value, _function, numeric, null).warn(warningMessageFunction)

// Returns a boolean `err` which is true if the type is incorrect. And returns the recieved type.
const { err, type } = mis(value, string)

if (err) {
  // Manage type mismatch.
  console.log(type)
}

// Logs an error message if the value is not a string or array and throws a new Error
mis(value, _function, array).Error(errorMessageFunction, TypeError)
```
> _You are not obliged to utilize functions from lambdascript.js. The above can be implemented by referecing the expessions in section 5.3, accompanied by an error message, warning message, or the necessary conditional logic. Throwing errors should only be necessary for edge cases; the goal should be to avoid disrupting the flow of application logic whenever possible._


## 6. Objects 

### 6.1. Classify Objects Using instanceof [<img src="https://img.shields.io/badge/Imperative-34eb9f" alt="Imperative" title="Absolutely necessary and indispensable">](#key)
In JavaScript, a common misconception is that object instances of interfaces and constructors have unique types that JavaScript lacks the ability to interpret.Though, this is not the case. All object instances are of type "object," and each different object instance has an internal class (Not to be confused with the _class_ keyword).

#### What is an Object?
An object in JavaScript is a mutable data structure, meaning its properties and values can be changed. These objects can be referenced by variables, making them a versatile tool for representing complex data structures and modeling real-world entities. 

#### Arrays are objects
In JavaScript, arrays are a distinct type of object specially designed to store array elements separately from object properties in the memory heap. With the introduction of Array.isArray(), arrays can now be explicitly identified. Despite being considered objects, isArray is included in utility functions due to the frequent need to distinguish arrays from other object classes.

#### Null is an object
Null being an object was a mistake in the development of the language that has remained due to backwards compatibility. Null has been comparable using `value === null` since the release of ECMAScript 3. Because null has a type of object, it should always be compared for excluding from other object classes. Despite null being an object it is considered and intended as a primitive value.

#### Type-checking objects
To target object instances and object literals, we can use typeof value === 'object' && value !== null && !Array.isArray(value) or its equivalent (See lambdascript.js). We use this expression because we already have mechanisms for checking null and arrays. We are happy to target object literals with object instances because JavaScript has the instanceof keyword that allows us to distinguish between the internal object's class definition.

#### instanceof
```javascript
new Blob()                             // [object Blob]
new Promise(() => {})                  // [object Promise]
document.createElement('span')         // [object HTMLSpanElement]
new MouseEvent('click')                // [object MouseEvent]                      
```
The `instanceof` keyword was inspired by the same named operator in the Java programming language. It returns a boolean if the left operand is an instnace of the right. 
`instanceof` allow us to check the class of an object instance similarly to `typeof`.
```javascript
new Blob() instanceof Blob                                       // true
new Promise(() => {}) instanceof Promise                         // true
document.createElement('span') instanceof HTMLSpanElement        // true
new MouseEvent('click') instanceof MoouseEvent                   // true    
```

#### Do not conflate static types with JavaScript types
TypeScript's IntelliSense provides a useful way to specify static types for JavaScript using JSDoc syntax, reducing type mismatches before runtime. It's crucial to remember that the types defined in TypeScript and JSDoc are not standard, and they conflate intrinsic objects and host objects (objects specific to a particular runtime, not the JavaScript language) as being "types" instead of classifications.

This breaks with the idiomatic behavior of JavaScript and can be fixed simply by using "object" instead of types defined by interfaces and constructors.

#### One value can be in instace of multiple interfaces and or constructors 
JavaScript is a prototype language meaning that one entity can be an instance of several constructors and or interfaces.  

```javascript
() => {} instanceof Function                                // true
() => {} instanceof Object                                  // true
document.createElement('div') instanceof Element            // true
document.createElement('div') instanceof Object             // true
document.createElement('div') instanceof HTMLDivElement     // true
```

The above example illustrates the difference between a "type" and an "object class." Programming languages like TypeScript treat object instances as types, which deviates from the native object classification system of JavaScript and often results in misrepresented type checking.

- When working with object literals, you must determine that the value is not an array or null.
- When working with object instances, you should detrmine the instanceof the value.

If you're working with both object literals and object instances togeather both approaches coincide.


### Use reliable conditinal statements
Use conditional statemenets with reliable typechecking. 

#### Common Falsy and Truthy Types
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

There isn't a clear-cut inverse rule. It's crucial never to assume a dynamic value will be the type you expect.

## 7. Void()
The void operator is a unary operator that is useful in various situations where you need to ensure the return value is explicitly undefined.

### 7.1. Do not void multiple operands [<img src="https://img.shields.io/badge/Evade-eb4034" alt="Evade" title="Strongly encouraged to find a way to circumvent or escape">](#key)
The void keyword should not be used with multiple operands.
```js
void operandA * operandB                   // Undesirable result
void operandA + operandB + operandC        // Undesirable result
```
Void should only be used with a single operand:
```js
void operand                               // undefined
void someFunction()                        // undefined
```
Use parenthesis to evaluate multiple operands as a single operand.
```javasc
void (operandA * operandB)                 // undefined
void (operandA + operandB + operandC())      // undefined
```
Using a single operand will always guarantee a return of undefined

## 8. Conditional Statements
- IF: Single line IF statemenet
- IF: Guard Clause
- Switch: Fallthrough
- Switch: Multi-way branching with conditions 


## 9. Templating
//@ Use template literals for templating DOM Nodes
//@ Use template literals for server side HTML templates
//@ Use tagged template functions advanced templating 
//@ Avoid handlebars + others



## 10. State Management
The publish-subscribe (pub-sub) pattern is the foundational principle behind all state management solutions within runtime environments. 
Because it is the foundational principle, it often presents a simpler alternative to many common third-party state management solutions.
The pub-sub pattern decouples state changes from state consumption, enhancing modularity and reducing boilerplate code.

In the publish-subscribe (pub-sub) pattern, a callback can subscribe to a topic. When a state change is published to a topic, 
it automatically triggers all relevant subscribers of that topic.

### 10.1. Deciding on a State Management Solution

- For typical state management needs, consider leveraging a pub-sub library like: ...
- Pub-Sub is a straightforward pattern that can be implemented in any programming language within a single module. If additional custom features are required, building a pub-sub implementation may be more suitable.
- If the aforementioned approaches are not viable, exploring third-party state management libraries is recommended.

### 10.2. Builiding a Pub-Sub State Management Solution

#### Pub-Sub fundamentals 
- Publisher: The entity responsible for publishing or broadcasting state changes to the subscribers.
- Subscriber: The entity that listens or subscribes to specific topics or channels to receive state updates.
- Topic: A named channel or category to which publishers can send messages and subscribers can subscribe to receive messages.
- Message: The data or payload sent by the publisher to the subscribers when a state change occurs.
- Subscription: The act of a subscriber indicating interest in receiving updates on a specific topic.
- Unsubscription: The act of a subscriber indicating that it no longer wishes to receive updates on a specific topic.
- Broker: An intermediary component that manages the routing of messages between publishers and subscribers, ensuring that messages are delivered to the correct subscribers.

#### Pub-Sub Intermediate 
- Callback: A function or method registered by a subscriber that gets invoked by the pub-sub system when a relevant message is published.
- Synchronous Pub-Sub: Pub-sub implementation where the publisher and subscribers operate synchronously, with immediate message delivery upon publication.
- Asynchronous Pub-Sub: Pub-sub implementation where the publisher and subscribers operate asynchronously, allowing for non-blocking message delivery.
- Wildcard Subscription: A subscription mechanism where a subscriber can subscribe to multiple topics using a wildcard pattern, such as subscribing to all topics under a certain hierarchy.

#### Pub-Sub Advanced
- Persistent State: Persistent state encompasses the recording of the application's state over time, facilitating features like undo, redo, and time travel. Its core purpose lies in capturing and maintaining the state data across various temporal instances.


## 11. Declarative Templating
Template literals offer a robust solution for templating in front-end and server-side development. With template literals, values can seamlessly be injected into placeholders, enabling dynamic content generation whilst encouraging a separation of concerns. In LambdaScript templates use a VC Pattern. View templates are imported by controllers, controllers contain the logic associated with populating and embeding view templates. 

### 11.1 View Templates
A View Template is a Lambda function that returns a template literal string.
- Placeholder values are always destructured from an object.
- View Templates should only contain values and must not contain any operators or function calls.
- All values should be string or numerical values (Not NaN, Null or undefined).
 
```html
export const htmlComponent = ({greetingClass, greeting, message}) => `
  <div class="${greetingClass}">
    <h1>${greeting}</h1>
    ${message}
  </div>
`
```
### 11.2 View Modules
A View Module is a file that contains one or multiple View Templates as module exports.
View Modules are suffixed by `.view.js`

### 11.3 Controllers
A controller is a module or direcotry responsible for how views are embeded and populated in the application.  
- Controllers contain all the logic requried to manipulate View Templates to be embeded into the application.
- Controllers can loop, nest, inject, and conditinally include or exclude View Templates as part of the application.
- Controllers are suffixed by `.ctrl.js`

This templating design pattern is heavily reliant on JavaScript's powerful string manipulation capabilities.
The empty constant is recommended for usage of an empty string `''` as it becomes more declarative when manipulating 
strings to create dynamic templates.
- join(empty) is the same as join('')
- .map, .filter and .reduce become useful when looping and embedding View Templates.
  

### 11.3. Event Modules
Event modules are optional modules that separate logic for eventListeners or event emitters from controllers.
Event Modules are suffixed by `.event.js`



## 7. Exception Handling
TBA

## x. Memory Resource and Reference Management
//@ WeakRef
//@ FinalizationRegistry
// Use only where necessary




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

### 8.x `==` [<img src="https://img.shields.io/badge/Avoid-eb34a2" alt="Avoid" title="Refrain from encountering where possible">](#key)

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
MIT © Wavefront, Julien Etienne 2024
