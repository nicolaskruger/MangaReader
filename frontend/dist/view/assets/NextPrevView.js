"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../View");
class NextPrevView extends View_1.View {
    constructor(element, first, last) {
        super(element);
        this.fId = first;
        this.lId = last;
    }
    template(models) {
        let prev = `<h1 class="Oper__h1 PC">
                        prev
                    </h1>`;
        let next = `<h1 class="Oper__h1 NC">
                        next
                    </h1>`;
        return `${(this.fId != models ? prev : '')}
                ${(this.lId != models ? next : '')}`;
    }
}
exports.NextPrevView = NextPrevView;
//# sourceMappingURL=NextPrevView.js.map