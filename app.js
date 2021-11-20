const express = require('express')
const connectMongo = require('./connect')
const procastinator = require('./routes/procastinator')
const notFound = require('./middleware/not-found')
const  errorHandlerMiddleWare = require('./core/error-handler')

require('dotenv').config()
const app = express()
const port = 80


app.use( express.urlencoded( { extended : false } ))
app.use( express.json() )
app.use( express.static('./public') )

app.get('/', ( req , res ) => res.sendFile('../public/index.html'))

app.use( '/api/v1/procastinator' , procastinator )
app.use( errorHandlerMiddleWare )

app.use(notFound)

const startMongo = async () => {
    try {
        await connectMongo(process.env.MONGO_URL)     
        app.listen( port, () => console.log( `Hmmm, I am Listening Your Requests on Port no => ${port}!` ))   
    } catch (error) {
       console.log(error); 
    }
}

startMongo()
