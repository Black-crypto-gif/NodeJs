const fs = require('fs');

const readStream = fs.createReadStream('./largeFile.txt', { encoding:'utf8' });
const writestream = fs.createWriteStream('./text5.txt');

/* readStream.on('data', (chunk) => {
    console.log('-----New-----');
    console.log(chunk.toString());
    writestream.write('\n NEW chunk\n');
    writestream.write(chunk);
}) */
readStream.pipe(writestream);