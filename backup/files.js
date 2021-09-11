const  fs = require('fs');

// Reading files

/* fs.readFile('./fethi.txt', (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
}) */

//writing files : 

/* fs.writeFile('./mellal.txt', 'hello fethi mellal', () => {
    console.log(" File changed");
}); */

// Directories : 
/* if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) => {
        if (err) {
            console.error(err);
        }
        console.log('Created');
    })
}else{
    fs.rmdir('./assets',(err) => {
        if (err) {
            console.log(err);
        }
        console.log('Removed');
    })
}
 */

// Deleting files :

/* if (fs.existsSync('./fethi.txt')) {
    fs.unlink('./fethi.txt', (err) => {
        if (err) {
            console.error(err);
        }
        console.log('File deleted');
    })
} */

/* fs.writeFile('./stream.js', ('d'), (err) =>{
    if (err) {
        console.log(err);
    }
    console.log("file created");
}) */
