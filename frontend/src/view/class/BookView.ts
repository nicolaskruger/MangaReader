import { Book } from "../../model/book";
import { View } from "../View";

export class BookView extends View{
    protected template(models: Book[]) {
        return models.map(b=>`<div class="Book Bk">
        <div class="Book__box">
            <img class="Book__img BkI" src="http://localhost:3000/bookImg/${b.id}" alt="">
        </div>
        <h2 class="Book__h2 Bkh2">${b.name}</h2>
    </div>`).join('');
    }
    
}