const fs = require('fs')

const getNewId = (array)=>{
    if(array.length > 0){
        return array[array.length-1].id + 1
    } else{
        return 1
    }
}

const newDate = () => new Date().toString()

function mustBeInArray(array, id) {
    return new Promise((reuse, ignore) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            ignore({
                message: 'ID is not good',
                status: 404
            })
        }
        reuse(row)
    })
}

function writeJSONFile(file, content) {
    fs.writeFileSync(file, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

function unlinkJSONFile(file, content) {
    fs.unlinkSync(file, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}


module.exports = {
    getNewId,
    newDate,
    mustBeInArray,
    writeJSONFile,
    unlinkJSONFile
}