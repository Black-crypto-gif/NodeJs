//Global Object :

//console.log(global);
setTimeout(()=>{
    console.log('in the timeout');
    clearInterval(int);
},3000);

const int = setInterval(() =>{
    console.log('in the interval');
}, 1000);


// dir and file name :

console.log(__dirname);
console.log(__filename); 

