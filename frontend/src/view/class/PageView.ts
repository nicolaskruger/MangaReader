import { Page } from "../../model/page";
import { View } from "../View";

export class PageView extends View{
    protected template(models: Page[]) {
        return models.map(p=>`<div class="Page__div P__div">
            <img class="Page__img P__img" src="http://localhost:3000/pageImg/${p.id}" alt="">
        </div>`).join('');
    }

}