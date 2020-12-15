import { HttpService } from "./HttpServices";

class HttpChapter extends HttpService{
    get cRoute(){
        return this.route()+'chapter/'
    }
    get idRoute(){
        return this.route()+'chapterId/'
    }
    selectIdBook(id:number){
        return this.get(`${this.cRoute}${id}`);
    }
    selectById(id:number){
        return this.get(`${this.idRoute}${id}`);
    }
}

export default new HttpChapter();