# LambdaScript Quick Start
[curl]: https://curl.se/docs/install.html
[nvm]: https://github.com/nvm-sh/nvm
### 1. Install the Extended JavaScript Standard Style for ESLint
Make sure you have [npm](#nvm) and [curl](#curl) installed first.
In the root of your project directory, run the below script:

```bash
npm install --save-dev \
  eslint-config-standard@latest \
  eslint@^8.0.1 \
  eslint-plugin-import@^2.25.2 \
  eslint-plugin-node@^15.0.0 || ^16.0.0 \
  eslint-plugin-promise@^6.0.0 \
  curl -O https://raw.githubusercontent.com/lambdascript/main/dist/eslintrc.json
```

### 2. Install TypeScript for JSDoc type checking (Optional)
`npm i -D typescript`

Add the below configuration to your project root, and modify as necessary:

_./tsconfig.js_
```json
{
    "compilerOptions": {
        "allowJs": true,
        "checkJs": true,
        "strict": true,
        "lib": [
            "ESNext",
            "dom"
        ]
    }
}
```

### 3. Add a "lambdaScript" entry to package.json
_./package.json_
```javascript
{
...
    "lambdaScript": {
        "Extended JavaScipt Standard Style" : "Default",
        "JSDoc" : "Default",
        //...Add anything necessary to describe the LambdaScript setup.
    }
...
}
```
### 4. Enable ES Modules for Node.js
Enable ES module for your node.js module system
_./package.json_
```javascript
{
    "type" : "module"
}
```
