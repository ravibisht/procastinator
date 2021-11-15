const express = require('express')
const connectMongo = require('./connect')
const procastinator = require('./routes/procastinator')
require('dotenv').config()
const app = express()
const port = 80


app.use( express.urlencoded({ extended : false }))
app.use( express.json() )

app.get('/', (req,res) => res.send("Hmm, I am Running."))

app.use( '/api/v1/procastinator' , procastinator )

const startMongo = async () => {
    try {
        await connectMongo(process.env.MONGO_URL)     
        app.listen( port, () => console.log( `Hmmm, I am Listening Your Requests on Port no => ${port}!` ))   
    } catch (error) {
       console.log(error); 
    }
}

startMongo()
