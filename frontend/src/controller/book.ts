import { controller } from "./controller";
import vp from '../view/ViewPage';
import pages from '../model/Pages'
import http from '../service/HttpBook';
import { Book } from "../model/book";
import { BookView } from "../view/class/BookView";
import { promises } from "fs";

export class BookC extends controller{
    search:HTMLInputElement;
    connect:(id:number)=>void;
    init(connect=(id:number)=>{}){ 
        this.connect = connect;
        this.select()
            
    }
    select(){
        return this.query(()=>http.select())
        .then(()=>{
            this.search = this.$(".S_inp");
            this.search.addEventListener("input",this.selectName.bind(this));
        });
    }
    selectName(){
        return this.queryEnd(()=>http.selectName(this.search.value));
    }
    private query(func:()=>Promise<Book[]>){
        return this.queryEnd(()=>vp.includeHtml(pages.book)
            .then(()=>{
                return func();
            }))
    }
    private queryEnd(func:()=>Promise<Book[]>){
        return func()
            .then((s:Book[])=>{
                new BookView(this.$(".Books"))
                    .set(s);
                document.querySelectorAll(".Bk")
                    .forEach((ss,i)=>{
                        ss.addEventListener("click",this.connect.bind(this,s[i].id))
                    })
            })
            .catch(err=>console.log(err))
    }
}