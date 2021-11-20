class APIError extends Error{
    constructor( message , status){
        super(message)
    }
}

const createErrorHandler = ( status , message ) => {
return new APIError( message  ,status )
}

module.exports = {
    createErrorHandler,
    APIError
}