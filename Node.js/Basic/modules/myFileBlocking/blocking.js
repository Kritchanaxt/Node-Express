//Blocking
const fs = require('fs')

// read file input.txt
const data = fs.readFileSync('/Users/kritchanaxt_./Desktop/Code/Node.js/Basic/modules/myFileBlocking/input.txt','utf-8')
console.log(data)

//write file
const outputText = `Hello Node.js\n${data}\nThe file was written when ${new Date()}`
fs.writeFileSync("/Users/kritchanaxt_./Desktop/Code/Node.js/Basic/modules/myFileBlocking/output.txt",outputText)
console.log("The file was written successfully.!")