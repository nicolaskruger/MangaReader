import { ChapterView } from "../view/class/ChapterView";
import { BookC } from "./book";
import { ChapterC } from "./chapter";
import { controller } from "./controller";
import { PageC } from "./page";

export class MainC extends controller{
    bookC:BookC = new BookC();
    chapterC:ChapterC = new ChapterC();
    pageC:PageC = new PageC();
    constructor(){
        super();
        this.pageC.init(this.chapterC.select.bind(this.chapterC));
        this.chapterC.init(this.bookC.select.bind(this.bookC),
            this.pageC.select.bind(this.pageC)); 
        this.bookC.init(this.chapterC.select.bind(this.chapterC));
        this.pageC.select(1);
    }
}