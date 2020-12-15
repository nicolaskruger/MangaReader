import query from '../database/query';
import { pathMake } from '../helper/pathMaker';
import fs from 'fs';

class page{
    select(){
        const sql = 'select * from page';

        return query(sql);
    }
    selectByChapter(idChap:number){
        const sql = `select * from page where idChap = ${idChap} order by number;`

        return query(sql);
    }
    selectPath(id:number){
        const sql = `select b.id as p1, c.number as p2 , p.number as p3 from book as b inner join 
        chapter as c on b.id = c.idBook
        inner join page as p on
        c.id = p.idChap where p.id = ${id};`

        return query(sql);
    }
    selectImg(id:number){
        return this.selectPath(id)
                .then((s:any)=>{
                    let pm = new pathMake(s[0])
                    return fs.readFileSync(`./assets/${pm.makePath()}`);
                })
    }
    
}

export default new page();