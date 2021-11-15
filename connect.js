const connectMon = require('mongoose')

 const connectMongo =  ( url ) => {
    return connectMon.connect(url)
}


module.exports = connectMongo