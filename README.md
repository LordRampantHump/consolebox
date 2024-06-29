## Installation

```bash
npm i consolebox
```

## Usage

```js
const { consoleBox } = require("consolebox");

consoleBox("Initalizing".white, "ConsoleBox".cyan, "1.0.3".green);
```

## Colors

```js
const { consoleBox } = require("consolebox");

console.log("hello".green);
console.log("i like cake and pies".underline.red);
console.log("inverse the color".inverse);
console.log("OMG Rainbows!".rainbow);
console.log("Ire".green + "la" + "nd".orange);
console.log(`${"Ire".green}la${"nd".orange}`);
```
