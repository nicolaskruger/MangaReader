import { View } from "../View";

export class NextPrevView extends View{
    fId:number;
    lId:number;
    constructor(element:HTMLElement,first:number,last:number){
        super(element)
        this.fId = first;
        this.lId = last;
    }
    protected template(models: number) {
        let prev = `<h1 class="Oper__h1 PC">
                        prev
                    </h1>`;
        let next = `<h1 class="Oper__h1 NC">
                        next
                    </h1>`;
        return `${(this.fId!=models?prev:'')}
                ${(this.lId!=models?next:'')}`
    }

}