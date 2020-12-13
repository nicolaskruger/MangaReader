import connections from './connections';
import {Connection} from 'mysql';
import {TableGeneric} from './tableGeneric';

class Table extends TableGeneric{
    connect ?:Connection;
    init(connect:Connection){
        console.log("call table");
        this.connect = connect;
        this.createBook();
        this.createChapter();
        this.createPage();
    }
    createBook(){
        const sql = `create table if not exists book (id int unsigned auto_increment primary key, name varchar(100), description text);`;

        this.createTabel(sql,'book')
    }
    createChapter(){
        const sql = `create table if not exists chapter (id int unsigned auto_increment primary key,
            name varchar(100),idBook int unsigned,number double, foreign key (idBook) references book(id));        
        `
        this.createTabel(sql,'chapter');
    }
    createPage(){
        const sql = `create table if not exists page (id int unsigned auto_increment primary key,
            number int unsigned, idChap int unsigned, foreign key (idChap) references chapter(id));`
        this.createTabel(sql,'page');
    }
}

export default new Table;