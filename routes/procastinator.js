const router  = require('express').Router()
const { 
     createProcasinator ,
     getProcastinators , 
     updateProcastinator,
     getProcastinator,
     deleteProcastinator
    } =  require('../controller/procastinator')

router.route('/') .get( getProcastinators )
                  .post( createProcasinator )

router.route('/:id').get(getProcastinator)
                   .put(updateProcastinator)
                   .delete(deleteProcastinator)



module.exports = router


