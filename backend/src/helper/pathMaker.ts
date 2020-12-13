class path{
    p1?:string;
    p2?:string;
    p3?:string;
}
export class pathMake{
    pm :path;
    constructor(path:path){
        this.pm = path;
    }
    private serialize(){
        return [this.pm.p1,this.pm.p2,this.pm.p3]
    }
    makePath(){
        return this.serialize().map(s=>s).join(`/`);
    }
}