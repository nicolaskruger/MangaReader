import { controller } from "./controller";
import vp from '../view/ViewPage';
import pages from '../model/Pages'
import hPage from '../service/HttpPage';
import hChap from '../service/HttpChapter';
import { Page } from "../model/page";
import { PageView } from "../view/class/PageView";
import { Chapter } from "../model/chapter";
import { ChapterC } from "./chapter";
import { NextPrevView } from "../view/assets/NextPrevView";
import { DropDownView } from "../view/assets/DropDownView";


export class PageC extends controller{
    back:(id:number)=>void;
    init(back:(id:number)=>void=(id:number)=>{}){
        this.back=back;
    }
    select(idChap:number){
        vp.includeHtml(pages.page)
            .then(()=>{
                document.querySelector(".DBut")
                    .addEventListener('click',()=>{
                        document.querySelector(".mD")
                            .classList.toggle("inv");
                    })
                return hPage.selectByIdChap(idChap)
            })
            .then((s:Page[])=>{
                new PageView(this.$(".Pg"))
                .set(s);
                return hChap.selectById(idChap);
            })
            .then((c:Chapter)=>{
                document.querySelector(".BaCk")
                    .addEventListener("click",this.back.bind(this,c.idBook))
                return hChap.selectIdBook(c.idBook);
            })
            .then((c:Chapter[])=>{
                new NextPrevView(this.$(".OC"),c[0].id,c[c.length-1].id)
                    .set(idChap);
                let idx  = c.map((s,i)=> [s,i])
                            .filter(s=>(s[0] as Chapter).id==idChap)
                            .map(s=>s[1]as number)[0];
                let next = c.filter((s,i)=>i==(idx+1))[0];
                let prev = c.filter((s,i)=>i==(idx-1))[0];
                if(next!=undefined) this.setOper(".NC",next.id);
                if(prev!=undefined) this.setOper(".PC",prev.id);
                new DropDownView(this.$(".mD"))
                    .set({chap:c,curr:idChap});
                document.querySelectorAll(".DC")
                    .forEach((s,i)=>{
                        s.addEventListener("click",this.select.bind(this,c[i].id))
                    })
            })
    }
    private setOper(op:string,id:number){
        document.querySelector(op)
            .addEventListener("click",this.select.bind(this,id));
    }
}