const mongoose = require("mongoose");

const ProcastinatorSchema = new mongoose.Schema({
  name: {
    required: [ true, 'Must Provide Procastination.' ],
    type : String,
    maxlength : [ 25, `You Can't procastinate thing so long..` ],
    trim : true, 
  },

  completed: {
    type : Boolean,
    default : false
  }

})


module.exports = mongoose.model('Procastinator', ProcastinatorSchema)