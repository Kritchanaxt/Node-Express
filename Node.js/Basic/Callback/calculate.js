// Callback Function
function calculate(x,y,callback){
    console.log("Calculating...")
    setTimeout(()=>{
        const sum = x+y  
        callback(sum)
    },3000)
}

calculate(100,50,function(result){
    console.log(`positive = ${result}`)
})

