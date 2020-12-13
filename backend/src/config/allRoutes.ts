import {Express} from 'express';
import books from '../controller/books';
import chapter from '../controller/chapter';
import page from '../controller/page';
import {Router} from 'express';


export default (app:Express)=>{
    const allRoute:Router[] = [
        books,
        chapter,
        page
    ];
    allRoute.forEach(route=>{
        app.use(route);
    })
}