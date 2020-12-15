import { ChapterC } from "../../controller/chapter";
import { Chapter } from "../../model/chapter";
import { View } from "../View";

export class DropDownView extends View{
    protected template(models:{chap:Chapter[];curr:number}) {
        return models.chap.map(c=>`
            <div class="DropCont DC ${c.id==models.curr?'curr':''}">${c.number}</div>
        `).join('');
    }

}