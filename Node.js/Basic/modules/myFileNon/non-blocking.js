//Non blocking
const fs = require('fs')

//read file input.txt
fs.readFile("/Users/kritchanaxt_./Desktop/Code/Node.js/Basic/modules/myFileNon/inputNon.txt",'utf-8',(err,data)=>{
    if(err) return console.log("Error ",err)
    const outputText = `Hello Node.js\n${data}\n The file was written when ${new Date()}`

    // Write to output.txt
    fs.writeFile("/Users/kritchanaxt_./Desktop/Code/Node.js/Basic/modules/myFileNon/outputNon.txt",outputText,err=>{
        if(err) return console.log("Error ",err)
        console.log("The file written successfully.! ")
    })
})