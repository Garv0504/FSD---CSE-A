const promise = require('fs').promises

const fsp = promise.writeFile('data.txt', 'hello using fs promise')
fsp.then(()=> {
    console.log('Data written successfully')
}).catch((err)=>{
    console.log(error)
})
console.log('finn')