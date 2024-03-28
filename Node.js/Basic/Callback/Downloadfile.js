//Program download file
const url1="Callback.dev/file1.json"
const url2="Callback.dev/file2.json"
const url3="Callback.dev/file3.json"
const url4="Callback.dev/file4.json"
const url5="Callback.dev/file5.json"


function downloading(url,callback){
    console.log(`downloading ${url}`)
    setTimeout(()=>{
        callback(url)
    },3000)
}
//Callback hell
downloading(url1,function(result){
    console.log(`download ${result} complete!`)
    downloading(url2,function(result){
        console.log(`download ${result} complete!`)
        downloading(url3,function(result){
            console.log(`download ${result} complete!`)
            downloading(url4,function(result){
                console.log(`download ${result} complete!`)
                downloading(url5,function(result){
                    console.log(`download ${result} complete!`)
                })
            })
        })
    })
})