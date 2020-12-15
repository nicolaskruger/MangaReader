"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../View");
class DropDownView extends View_1.View {
    template(models) {
        return models.chap.map(c => `
            <div class="DropCont DC ${c.id == models.curr ? 'curr' : ''}">${c.number}</div>
        `).join('');
    }
}
exports.DropDownView = DropDownView;
//# sourceMappingURL=DropDownView.js.map