const  child_process = require("child_process")
child_process.exec("yarn app",(err,result,errout)=>{
    console.log(err,result,errout)
})