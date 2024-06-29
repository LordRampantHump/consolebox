const {consoleBox} = require('./consoleBox')

// Console Box https://www.npmjs.com/package/consolebox
consoleBox('Initalizing'.white, 'ConsoleBox'.cyan, '1.0.4'.green); // ConsoleBox

// Using Colors will be available wherever you use ConsoleBox https://www.npmjs.com/package/colors
console.log('Using Colors:');
console.log('hello'.green);
console.log('i like cake and pies'.underline.red)
console.log('inverse the color'.inverse); 
console.log('OMG Rainbows!'.rainbow); 
console.log('Run the trap'.trap); 
console.log("Ireland".bgGreen);
console.log(`${"Ire".green}la${"nd".yellow}`);
console.log("ConsoleBox + Colors".america);