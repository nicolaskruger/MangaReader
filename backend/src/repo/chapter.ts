import query from '../database/query';

class chapter{
    select(){
        const sql = 'select * from chapter';

        return query(sql);
    }
    selectByBook(idBook:number){
        const sql = `select * from chapter where idBook = ${idBook} order by number;`

        return query(sql);
    }
}

export default new chapter();