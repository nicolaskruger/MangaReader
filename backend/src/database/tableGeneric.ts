import { Connection } from "mysql";

export class  TableGeneric{
    connect ?:Connection;
    createTabel(sql:string,tablename:string=''){
        this.connect?.query(sql,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`create table ${tablename} with success`);
            }
        })
    }
}