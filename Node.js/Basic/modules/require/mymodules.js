
//Providing services with various functions

function getCurrentTime(){
    return new Date()
}

function add(x,y){
    return x+y
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//Export command to use
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.formatNumber = formatNumber
