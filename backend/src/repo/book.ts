import query from '../database/query';
import fs from 'fs';
import myPath from '../helper/imgPath';
import imgType from '../helper/imgType';

class book{
    select(){
        const sql = 'select * from book order by name';

        return query(sql);
    }
    selectImg(id:number){
        return new Promise((res,rej)=>{
            try {
                res(fs.readFileSync(`${myPath}${id}/capa${imgType}`));
            } catch (error) {
                rej(error);
            }
        })
    }
    selectById(id:number){
        const sql = `select * from book where id = ${id}`;

        return query(sql);
    }
    selectByName(name:string){
        const sql = `select * from book where name like '%${name}%' order by name`;

        return query(sql);
    }
}

export default new book();