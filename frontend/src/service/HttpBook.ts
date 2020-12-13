import { HttpService } from "./HttpServices";

class HttpBook extends HttpService{
    get bRout(){
        return this.route()+`book`;
    }

    select(){
        return this.get(this.bRout);
    }
}

export default new HttpBook();