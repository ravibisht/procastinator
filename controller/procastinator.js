const Procastinator = require('../model/Procastinator')
const asyncWrapper = require('../middleware/async')

const createProcasinator = asyncWrapper( async (req, res,next) => {
    const procastinatorResult = await Procastinator.create(req.body)
    res.status(201).json(procastinatorResult)
})

const getProcastinators = asyncWrapper( async (req, res) => {
        const result = await Procastinator.find()
        res.status(200).json(result)
})

const updateProcastinator = asyncWrapper( async (req, res) => {
        if (req.params.id) {
            const result = await Procastinator.findOneAndUpdate({ _id: req.params.id } , req.body)
            res.status(200).json( { message: 'Updated Scussfully.', result  } )
        }
})



const getProcastinator =  asyncWrapper( async (req, res) => {
      
        if (req.params.id) {
            const task = await Procastinator.findOne( { _id: req.params.id })
            if(!task){
                res.status(404).json( { message : "Id Not Found " } )
            }
            res.status(200).json({ task })
        }
}) 

const deleteProcastinator = asyncWrapper( async (req, res) => {
       
    if (req.params.id) {
            const result = await Procastinator.findOneAndDelete({ _id : req.params.id })
            if (result) {
                res.status(200).json({ message: result })
            }
        }
})

module.exports = {
    createProcasinator,
    getProcastinators,
    getProcastinator,
    updateProcastinator,
    deleteProcastinator,
}