export abstract class  View {
    protected element:HTMLElement;
    constructor(elemet:HTMLElement) {
        this.element = elemet;
    }
    protected abstract  template(models);
    public set(models){
        this.element.innerHTML= this.template(models);
    }
    public setInvisibity(b:boolean,el:HTMLElement=this.element){
        if(b){
            if(!el.classList.contains("inv")){
                el.classList.add("inv");
            }
        }else{
            el.classList.remove("inv");
        }
    }
}