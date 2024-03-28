//Make Promise

const connect = true  //Check continuously
const url1 = "Promise.dev/file1.json"
const url2 = "Promise.dev/file2.json"
const url3 = "Promise.dev/file3.json"
const url4 = "Promise.dev/file4.json"
const url5 = "Promise.dev/file5.json"

function downloading(url){
    return new Promise(function(resolve,reject){
        console.log(`Downloading file ${url}`)
        setTimeout(()=>{
            if(connect){url2
                resolve(`download ${url} complete!`)
            } else {
                reject('Error')
            }
        },1000)
    })
}

//Reduce Promise Then
downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
    return downloading(url4)
}).then(function(result){
    console.log(result)
    return downloading(url5)
}).then(function(result){
    console.log(result)
})
