const { APIError } = require('./errorHandler')

const errorHandlerMiddleWare = ( error , req , res , next ) => {
    if(error instanceof APIError ){
     return  res.status( error.status ).json(  error.message  )
    }
    console.log(error)
    return res.status( 500 ).json( { message : error.message }  ) 
}

module.exports  = errorHandlerMiddleWare