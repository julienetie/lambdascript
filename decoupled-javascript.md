# Decoupled JavaScript

The Decoupled JavaScript standard delineates clear conventions for crafting loosely-coupled JavaScript code using a procedural and partially-functional approach.

### Goal
Decoupled JavaScript aims to:
- Establish a contemporary standard, excluding detrimental practices and misconceptions
- Eliminate practices that lead to brittle codebases
- Enhance productivity
- Direct developers' attention towards meaningful paradigms
- Resolve the ambiguity in different problem-solving approaches in JavaScript.
- Establish Decoupled JavaScript as a best practice reference for Vanilla JavaScript

### Areas of focus
- [1\. Use of ECMAScript](#1-use-of-ecmascript)
  - [1.1. The state of ECMAScript](#11-the-state-of-ecmascript)
  - [1.2. Working with ECMAScript 2015, ECMAScript 2016 and EcmaScript Next](#12-working-with-ecmascript-2015-ecmascript-2016-and-ecmascript-next)
  - [1.3. Polyfills](#13-polyfills)
  - [1.4. Exceptions](#14-exceptions)
    
- 3\. Arrow Functions

    1.1. Partial Application 

    1.2. Currying 

    1.3. Compose and Pipe 

    1.4. Recursion 

4. Void 

5. Modules 

6. Standard JavaScript 

    5.1. Automatic Semicolon Insertion 

    5.2. Extending Standard JavaScript for Decoupled JavaScript 

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

8. Exception Handling 

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

New versions of ECMAScript are released periodically, introducing new features, syntax, and improvements to the language.

### 1.1. The state of ECMAScript
Several years preceding the introduction of the Decoupled JavaScript standard, major web browsers and JavaScript runtimes had already demonstrated either complete or near-complete support for ECMAScript 2015 (ES6) and ECMAScript 2016 (ES7), While also demonstrating robust support for forthcoming ECMAScript Next standards. Expanding on this, non-evergreen browser usage constitutes less than 1% of all global browser usage. Hence, in the present era, there's little necessity to:

- Compile or transpile codebases from modern ECMAScript standards to ECMAScript 5.
- Polyfill features absent in ECMAScript 5.
- Advocate for increased usage of compilers like BabelJS.

Unless a valid edge case necessitates it.

### 1.2. Working with ECMAScript 2015, ECMAScript 2016 and EcmaScript Next
Core ECMAScript features are widely supported across all major browsers and JavaScript platforms, ensuring the compatibility of raw ECMAScript 2015 and beyond at runtime, eliminating the need for compilation. To confirm the widespread support of a feature, you can refer to the following resources:
- [Can I Use](https://caniuse.com/){:target="_blank"}
- [MDN Web Docs](https://developer.mozilla.org/){:target="_blank"}
- [ECMAScript 6 compatibility table](https://compat-table.github.io/compat-table/es6/){:target="_blank"}

### 1.3. Polyfills
Polyfills should be included manually as necessary, rather than relying on polyfill libraries that contain multiple polyfills. It's also discouraged to use invalid syntax to support non-standard features. Excessive or non-standard syntax should be avoided because it's unlikely to enhance performance, maintainability, or the user experience.

### 1.4. Exceptions
Before opting for legacy syntax, ensure that the platform you're developing for lacks adequate support for ECMAScript 2015 or above syntax. Understanding the limitations of the platforms you develop for is crucial before making such a decision as newer standards can allow for vastly improved productiveity.
