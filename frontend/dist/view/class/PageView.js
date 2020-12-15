"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../View");
class PageView extends View_1.View {
    template(models) {
        return models.map(p => `<div class="Page__div P__div">
            <img class="Page__img P__img" src="http://localhost:3000/pageImg/${p.id}" alt="">
        </div>`).join('');
    }
}
exports.PageView = PageView;
//# sourceMappingURL=PageView.js.map