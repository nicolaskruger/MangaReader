"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../View");
class BookView extends View_1.View {
    template(models) {
        return models.map(b => `<div class="Book Bk">
        <div class="Book__box">
            <img class="Book__img BkI" src="http://localhost:3000/bookImg/${b.id}" alt="">
        </div>
        <h2 class="Book__h2 Bkh2">${b.name}</h2>
    </div>`).join('');
    }
}
exports.BookView = BookView;
//# sourceMappingURL=BookView.js.map