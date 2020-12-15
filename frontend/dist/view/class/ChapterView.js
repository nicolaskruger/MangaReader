"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../View");
class ChapterView extends View_1.View {
    template(models) {
        return models.map(s => `<div class="Chapter_div Chap__div">Chapter ${s.number}: ${s.name}</div>
        `).join('');
    }
}
exports.ChapterView = ChapterView;
//# sourceMappingURL=ChapterView.js.map