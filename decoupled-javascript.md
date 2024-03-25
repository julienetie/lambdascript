# Decoupled JavaScript

Decoupled JavaScript standard delineates clear conventions for crafting loosely-coupled JavaScript code using a procedural and partially-functional approach.

### Goal
Decoupled JavaScript aims to:
- Establish a contemporary standard, excluding detrimental practices and misconceptions.
- Eliminate practices that lead to brittle codebases.
- Enhance productivity
- Direct developers' attention towards meaningful paradigms.
- Resolve the ambiguity in different problem-solving approaches in JavaScript.
- Establish Decoupled JavaScript as a best practice reference for Vanilla JavaScript.

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
  - [3.2. Prefer .js over .mjs]
  - [3.3. Use the ModuleSpecifier Query String]

- [4\. Variables]
  - [4.1. Use const]
  - [4.2, Use let if reassigned] 
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

### 1.3. Polyfills
Polyfills should be included manually as necessary, rather than relying on polyfill libraries that contain multiple polyfills. It's also discouraged to use invalid syntax to support non-standard features. Excessive or non-standard syntax should be avoided as it's unlikely to enhance performance, maintainability, or the user experience.

### 1.4. Exceptions
Before reverting to legacy syntax, it's crucial to ascertain whether the platform you're developing for lacks sufficient support for ECMAScript 2015. Recognizing the limitations of your development platforms is paramount, as embracing newer standards can lead to significantly enhanced productivity.

## 2. JavaScript Standard Style
[![image](https://github.com/julienetie/decoupled-javascript/assets/7676299/b40f8fe6-2688-499e-bb53-ae8aacb2f5a6)](https://standardjs.com/)

[JavaScript Standard Style](https://standardjs.com/)

Decoupled JavaScript primarily adheres to the _JavaScript Standard Style_, renowned for its thoughtful design and high productivity, making it a fitting style guide for modern JavaScript codebases.

[asiLink]: https://tc39.es/ecma262/#sec-automatic-semicolon-insertion

### 2.1. Automatic Semicolon Insertion
[Automatic Semicolon Insertion](asiLink) (ASI) is a feature of ECMAScript often misconstrued in discussions about the necessity of semicolons. To truly grasp this capability, it's crucial to understand the following:

- ASI is an integral part of the [ECMAScript standard](asiLink) and is not a language mistake as often assumed.
- Valid Source code is not responsible for minification; instead, minifiers tokenize semicolons independently.
- ASI does not necessarily insert missing semicolons at the end of a line.

The last point is frequently misunderstood. ASI doesn't handle all semicolon insertions but **specifically ensures semicolons are inserted at the end of JavaScript sentences** where necessary.

In JavaScript, a sentence typically refers to a complete statement or expression that performs a specific action or computation. Decoupled JavaScript embraces ASI, as advocated by the JavaScript Standard Style.


In practice, ASI in JavaScript behaves similarly to programming languages that don't rely on end of sentence semicolons such as Golang, Ruby, and Swift, where semicolons may only be necessary in non-end-of-sentence scenarios.

### 2.2. Extending Standard JavaScript to the Decoupled Specification

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
