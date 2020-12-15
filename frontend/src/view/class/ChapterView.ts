import { Chapter } from "../../model/chapter";
import { View } from "../View";

export class ChapterView extends View{
    protected template(models: Chapter[]) {
        return models.map(s=>`<div class="Chapter_div Chap__div">Chapter ${s.number}: ${s.name}</div>
        `).join('');
    }

}