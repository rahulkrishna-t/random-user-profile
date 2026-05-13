console.log(`Start`);
setTimeout(()=>{
    console.log(`Timer Function`);
    
},0)
Promise.resolve().then(()=>{
    console.log(`Promise`);
    
})

console.log(`End`);

