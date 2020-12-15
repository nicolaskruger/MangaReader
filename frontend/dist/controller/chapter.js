"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const ViewPage_1 = __importDefault(require("../view/ViewPage"));
const Pages_1 = __importDefault(require("../model/Pages"));
const HttpBook_1 = __importDefault(require("../service/HttpBook"));
const HttpChapter_1 = __importDefault(require("../service/HttpChapter"));
const DescriptionView_1 = require("../view/class/DescriptionView");
const ChapterView_1 = require("../view/class/ChapterView");
class ChapterC extends controller_1.controller {
    init(back = () => { }, next = (id) => { }) {
        this.back = back;
        this.next = next;
    }
    select(id) {
        ViewPage_1.default.includeHtml(Pages_1.default.chapter)
            .then(() => {
            document.querySelector(".BaCk")
                .addEventListener("click", this.back);
            return HttpBook_1.default.selectId(id);
        })
            .then((b) => {
            new DescriptionView_1.DescriptionView(this.$(".Des"))
                .set(b);
            return HttpChapter_1.default.selectIdBook(id);
        })
            .then((cl) => {
            new ChapterView_1.ChapterView(this.$(".Chap"))
                .set(cl);
            document.querySelectorAll(".Chap__div")
                .forEach((div, i) => {
                div.addEventListener("click", this.next.bind(this, cl[i].id));
            });
        });
    }
}
exports.ChapterC = ChapterC;
//# sourceMappingURL=chapter.js.map