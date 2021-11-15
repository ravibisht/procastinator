const Procastinator = require('../model/Procastinator')

const createProcasinator =  async ( req , res ) => {
    const procastinatorResult = await Procastinator.create(req.body)
    res.status(201).json(procastinatorResult)
}

const getProcastinators = async ( req , res ) => {
    try{
        const result = await Procastinator.find()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json({
           message : `Something bad happen .${error}` 
        })
    }
}

const updateProcastinator = async (req , res ) => {
    try {

        console.log(req.params.id);
        if(req.params.id){
        const result =  Procastinator.findOneAndUpdate({ _id : req.params.id})
        res.status(200).json({message : 'Updated Scussfully .',result})
        }
    } catch (error) {
        res.status(400).json({
            message : error
        })
    }
}


const getProcastinator = async (req , res ) => {
    try {
        if(req.params.id){
        const result =  Procastinator.findOne({ _id : req.params.id})
        res.status(200).json({result})
        }
    } catch (error) {
        res.status(400).json({
            message : error
        })
    }
}
const deleteProcastinator = async (req , res ) =>{
    try{

        if(req.params.id){
           const result = Procastinator.findOneAndDelete({_id : req.params.id})

           if(result){
               res.status(200).json({message : 'Procastinator no exists'})
           }
        }

    }catch(error){
res.status(500).json({message : error})
    }
}

module.exports = { 
    createProcasinator ,
    getProcastinators , 
     getProcastinator,
                     updateProcastinator ,
                     deleteProcastinator,
                    
                    }