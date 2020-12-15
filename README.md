# :open_book: MangaReader

## :pushpin: Table of Contents
 * [Desciption](#book-Description)
 * [Technology](#hammer_and_wrench-Technology)
 * [Task](#scroll-Task)
 * [Install](#gear-Install)
 ## :book: Description 
 manga reader web app with typescript, node, express and mysql
## :hammer_and_wrench: Technology
 * [NodeJS](https://nodejs.org/en/)
 * [typescript](https://www.typescriptlang.org/)
 * [html](https://www.w3schools.com/html/)
 * [css](https://www.w3schools.com/css/)
 * [mysql](https://www.mysql.com/)
 * [Express Framework](http://expressjs.com/en/)
## :scroll: Task
- [X] database with tree tables, books, chapter and page  
- [X] v1: book's view show all books, you can filter a book by name and if you click on it, opens v2 of the especific book
- [X] v2: screen's view that show all chapteres of especific book, if you click on the chapter you can go to the first page of especific chapter. 
- [ ] v3: page's view that show a especific page of especific chapter
## :bookmark_tabs: Require
* [mysql](https://www.mysql.com/)
* [NodeJS](https://nodejs.org/en/)
## :gear: Install

if you want to start the program with some data on it you need to run `backup.sql` on workbench. This program use user: `exclude` and password: `password`, for this program to start you need to create this user on workbench, or alter the file `backend/src/connection.ts` with your user and password.</br>
obs .: the authentication type for the user need to be standard.</br>

```JavaScript
import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'yourUser',
    password: 'yourPassword',
    database: 'motoShop'
})

export default connection;
```
to run the program
```bash
npm install
# 
cd backend
npm intall
#
cd ../frontend
npm install
#
cd ../backend
npm start
```
