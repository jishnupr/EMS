//data base connection

const mongoose=require('mongoose')
//mongodb and nodejs connection
mongoose.connect('mongodb://127.0.0.1:27017/ems',()=>{
    console.log("mongodb connection established");
})
//schema creation
const emp= new mongoose.Schema({
    id:String,
    empname:String,
    age:String,
    designation:String,
    salary:String,
})
const employee= mongoose.model('Employees',emp)
module.exports=
{
     employee
    }