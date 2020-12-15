import { HttpService } from "./HttpServices";

class HttpPage extends HttpService{
    get pRoute(){
        return this.route()+`page/`;
    }
    selectByIdChap(id:number){
        return this.get(`${this.pRoute}${id}`);
    }
}

export default new HttpPage();