//console.log(process);
//console.log(process.env);
console.log(process.argv[2]);
for(let i=0;i<process.argv.length; i++){
    console.log(process.argv[i])
}

//uso de memoria
console.log(process.memoryUsage())
