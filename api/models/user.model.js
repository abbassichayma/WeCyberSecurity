const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true,require:true},
    password:{type:String,require:true},
    social:{type:String,require:true},
    birth:{type:String,require:true}

})

module.exports = mongoose.model('user',userSchema)