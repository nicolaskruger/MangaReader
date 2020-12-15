import {controller} from './controller';
import vp from '../view/ViewPage';
import page from '../model/Pages'
import hbook from '../service/HttpBook';
import hChap from '../service/HttpChapter';
import { Book } from '../model/book';
import { DescriptionView } from '../view/class/DescriptionView';
import { Chapter } from '../model/chapter';
import { ChapterView } from '../view/class/ChapterView';

export class ChapterC extends controller{
    back:()=>void;
    next:(id:number)=>void;
    init(back:()=>void=()=>{},
        next:(id:number)=>void=(id:number)=>{}){ 
        this.back =back;
        this.next =next;
    }
    select(id:number){
        vp.includeHtml(page.chapter)
            .then(()=>{
                document.querySelector(".BaCk")
                    .addEventListener("click",this.back);
                return hbook.selectId(id)
            })
            .then((b:Book)=>{
                new DescriptionView(this.$(".Des"))
                    .set(b);
                return hChap.selectIdBook(id);
            })
            .then((cl:Chapter[])=>{
                new ChapterView(this.$(".Chap"))
                    .set(cl);
                document.querySelectorAll(".Chap__div")
                    .forEach((div,i)=>{
                        div.addEventListener("click",this.next.bind(this,cl[i].id));
                    })
            })
    }
}