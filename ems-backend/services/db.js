//data base connection

const mongoose=require('mongoose')
//mongodb and nodejs connection
mongoose.connect('mongodb://localhost:27017/ems',()=>{
    console.log("mongodb connection established");
})
//schema creation
const employee= mongoose.model('Employee',{
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String,
})
module.exports=
{
     employee
    }