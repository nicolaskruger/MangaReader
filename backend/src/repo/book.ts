import query from '../database/query';
import fs from 'fs';
import myPath from '../helper/imgPath';
import imgType from '../helper/imgType';

class book{
    select(){
        const sql = 'select * from book';

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
}

export default new book();