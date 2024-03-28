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

//Async & Await

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
}

start()