import { controller } from "./controller";
import vp from '../view/ViewPage';
import pages from '../model/Pages'
import http from '../service/HttpBook';
import { Book } from "../model/book";
import { BookView } from "../view/class/BookView";

export class BookC extends controller{
    select(){
        vp.includeHtml(pages.book)
            .then(()=>{
                return http.select();
            })
            .then((s:Book[])=>{
                new BookView(this.$(".Books"))
                    .set(s);
            })
            .catch(err=>console.log(err));
    }
}