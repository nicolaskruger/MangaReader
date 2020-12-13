import { Duplex } from 'stream';
import {HttpService} from '../service/HttpServices';
import {View} from './View';

class ViewPage extends View{
    protected template(models: string) {
        
    }
    includeHtml(models: string){
        let http =  new HttpService();
        return fetch(http.route()+`view/${models}`)
            .then(s=>{
                return s.text();
            })
            .then(s=>{
                this.element.innerHTML = s
            })
            .catch(err => console.log(err));
    }
    constructor(element:HTMLElement){
        super(element);
    }
}

export default new ViewPage(document.querySelector(".Principal"));