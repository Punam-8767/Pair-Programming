let express= require('express');
let app = express();
let sql = require('mssql');

app.listen(3030, () =>{ console.log("Server is running on 3030!") })

app.get('/', function(request, response){
    response.write("This is the home page");
    response.end();
})

let config={
    user: 'sa',
    password: 'Punam@8767',
    server: 'PUNAM\\SQLSERVER16.0.1000',
    database: 'Universities',
    options: {
        encrypt: false,
        useUTC: true
    }
}

sql.connect(config, function(error){
    if(error)
    console.log(error);
    else
    console.log("SQL connected");
})

app.get('/viewstudents', function(request, response){
    let req= new sql.Request();
    req.query('select * from students',function(records, error){
        if(error)
        console.log(error)
        else
        response.send(records);
    })
})

app.get('/viewteachers', function(request, response){
    let req= new sql.Request();
    req.query('select * from teachers',function(records, error){
        if(error)
        console.log(error)
        else
        response.send(records);
    })
})

app.get('/viewdepartments', function(request, response){
    let req= new sql.Request();
    req.query('select * from departmentss',function(records, error){
        if(error)
        console.log(error)
        else
        response.send(records);
    })
})

app.post('/insertstudents', function(request,response){
    let req= new sql.Request();
    req.query(`insert into students values(20,'Punam',200000,'2000-08-18',102)`,
    (recordset, error)=>{
    if(error)
    console.log(error)
    else
    response.send(recordset);
    })
})

app.post('/insertteachers', function(request,response){
    let req= new sql.Request();
    req.query(`insert into teachers values(25,'Pornima',250000,'2000-08-20',100)`,
    (recordset, error)=>{
    if(error)
    console.log(error)
    else
    response.send(recordset);
    })
})



















// app.post('/update', function(request, response){
//     let req= new sql.Request();
//     req.query(`update employee set empname='Elena' where empid=${request.params.id}`,
//     (recordset,error)=>{
//         if(error)
//         {
//             console.log(error);
//             console.log(request.params.id);
//         }
//         else
//         response.send(recordset);
//     })
// })


