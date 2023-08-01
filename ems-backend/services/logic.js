const db = require('./db')

const allEmployees = ()=>{
    return db.employee.find().then((result)=>{
        if(result){
            return {
                statusCode:200,
                employee:result
            }
        }else{
            return{
                statusCode:401,
                message:'No employess found'
            }
        }
    })
}


const addEmployee =(id,empname,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employee already exist"
            }
        }else{
            const newEmployee = new db.employee({id,empname,age,designation,salary})
            //to save the employee
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee added sucessfully"
            }
        }
    })
}

const deleteEmployee =(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:"Employee deleted successfully"
        }
    })
}


module.exports ={
    allEmployees,
    addEmployee,
    deleteEmployee
}