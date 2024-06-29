const colors = require('colors');


exports.consoleBox = function (action, item, version){
    let construct = '';
    let pp = 7;
    let tl = '╭'.yellow
    let tr = '╮'.yellow
    let bl = '╰'.yellow
    let br = '╯'.yellow
    let st = '─'.yellow
    let sd = '│'.yellow
    let space = '\xa0'
    let padd = '';
    for (var ii = 0; ii < pp; ii++) {
     padd = padd + space
    }
    
    function emptyLine(construct, count) {
        for (var i = 0; i < count; i++) {
            construct = construct + sd;
            for (var ii = 0; ii < (strLen); ii++) {
    
                construct = construct + space
            }
    
            construct = construct + sd + '\n';
        }
    
    
        return construct
    
    }
    
    str = action + item + version;
    strLen =  + (pp * 2) + (str.length - (10 * 3)) + 4;
    // top line
    construct = tl;
    for (var i = 0; i < (strLen); i++) {
        construct = construct + st
    }
    construct = construct + tr + '\n';
    // add 2 empty lines
    construct = emptyLine(construct, 2);
    
    // main line
    construct = construct + `${sd}${padd}${action} ${item} v ${version}${padd}${sd}\n`
    
    // add 2 empty lines
    construct = emptyLine(construct, 2);
    
    // bottom line
    construct = construct + bl;
    for (var i = 0; i < (strLen); i++) {
        construct = construct + st
    }
    construct = construct + br;
    
    console.log(construct)
    }