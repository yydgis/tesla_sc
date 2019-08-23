'use strict';

const fs = require('fs');

var logger = fs.createWriteStream('tesla.txt', {
  flags: 'w' // 'a' means appending (old data will be preserved)
});

logger.write('some data') // append string to your file
logger.write('more data') // again
logger.write('and more') // again
let rawdata = fs.readFileSync('sc.json');
let sc = JSON.parse(rawdata);
console.log(sc);
var n = sc.superchargers.length;
for (var i=0;i<n;++i)
{
    var scs = sc.superchargers[i];
    if (scs.hasOwnProperty('id'))
    {
        //logger.write(`${scs.id},${scs.location.lat},${scs.location.lng}\n`)
        console.log(`${scs.id},${scs.location.lat},${scs.location.lng}\n`);
    }
}
logger.close();
