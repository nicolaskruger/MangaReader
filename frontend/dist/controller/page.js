"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const ViewPage_1 = __importDefault(require("../view/ViewPage"));
const Pages_1 = __importDefault(require("../model/Pages"));
const HttpPage_1 = __importDefault(require("../service/HttpPage"));
const HttpChapter_1 = __importDefault(require("../service/HttpChapter"));
const PageView_1 = require("../view/class/PageView");
const NextPrevView_1 = require("../view/assets/NextPrevView");
const DropDownView_1 = require("../view/assets/DropDownView");
class PageC extends controller_1.controller {
    init(back = (id) => { }) {
        this.back = back;
    }
    select(idChap) {
        ViewPage_1.default.includeHtml(Pages_1.default.page)
            .then(() => {
            document.querySelector(".DBut")
                .addEventListener('click', () => {
                document.querySelector(".mD")
                    .classList.toggle("inv");
            });
            return HttpPage_1.default.selectByIdChap(idChap);
        })
            .then((s) => {
            new PageView_1.PageView(this.$(".Pg"))
                .set(s);
            return HttpChapter_1.default.selectById(idChap);
        })
            .then((c) => {
            document.querySelector(".BaCk")
                .addEventListener("click", this.back.bind(this, c.idBook));
            return HttpChapter_1.default.selectIdBook(c.idBook);
        })
            .then((c) => {
            new NextPrevView_1.NextPrevView(this.$(".OC"), c[0].id, c[c.length - 1].id)
                .set(idChap);
            let idx = c.map((s, i) => [s, i])
                .filter(s => s[0].id == idChap)
                .map(s => s[1])[0];
            let next = c.filter((s, i) => i == (idx + 1))[0];
            let prev = c.filter((s, i) => i == (idx - 1))[0];
            if (next != undefined)
                this.setOper(".NC", next.id);
            if (prev != undefined)
                this.setOper(".PC", prev.id);
            new DropDownView_1.DropDownView(this.$(".mD"))
                .set({ chap: c, curr: idChap });
            document.querySelectorAll(".DC")
                .forEach((s, i) => {
                s.addEventListener("click", this.select.bind(this, c[i].id));
            });
        });
    }
    setOper(op, id) {
        document.querySelector(op)
            .addEventListener("click", this.select.bind(this, id));
    }
}
exports.PageC = PageC;
//# sourceMappingURL=page.js.map