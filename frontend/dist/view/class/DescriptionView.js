"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../View");
class DescriptionView extends View_1.View {
    template(models) {
        return `<img class="Description__img D__im" src="http://localhost:3000/bookImg/${models.id}" alt="">
        <div class="Description__div D__div">
            <h1 class="Description__h1 D__h1">${models.name}</h1>
            <h2 class="Description__h2 D__h2">${models.description}</h2>
        </div>`;
    }
}
exports.DescriptionView = DescriptionView;
//# sourceMappingURL=DescriptionView.js.map