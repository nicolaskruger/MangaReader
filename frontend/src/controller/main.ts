import { BookC } from "./book";
import { controller } from "./controller";

export class MainC extends controller{
    bookC:BookC = new BookC();
    constructor(){
        super();
        this.bookC.select();
    }
}