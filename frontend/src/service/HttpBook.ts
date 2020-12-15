import { HttpService } from "./HttpServices";

class HttpBook extends HttpService{
    get bRout(){
        return this.route()+`book/`;
    }
    get nRoute(){
        return this.route()+`bookName/`;
    }

    select(){
        return this.get(this.bRout);
    }
    selectId(id:number){
        return this.get(`${this.bRout}${id}`);
    }
    selectName(name:string){
        return this.get(this.nRoute+name);
    }
}

export default new HttpBook();