import connection from './connections';

export default (query:string,paramas:any='')=>{
    return new Promise((res,rej)=>{
        connection.query(query,paramas,(err,result)=>{
            if(err) return rej(err);
            res(result);
            });
        
    })
}