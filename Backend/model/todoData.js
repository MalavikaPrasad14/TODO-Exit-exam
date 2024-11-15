const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Completed','Ongoing'],
        default:'Ongoing'
    }
});
const Todo=mongoose.model('tododetail',todoSchema);

module.exports=Todo;