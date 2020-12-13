import app from './config/custom-express';
import Table from './database/table';
import connection from './database/connections';

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        Table.init(connection);
        app.listen(3000,()=>{
            console.log("server start localHost:3000");
        })
        
    }
})
