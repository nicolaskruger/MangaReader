"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const chapter_1 = require("./chapter");
const controller_1 = require("./controller");
const page_1 = require("./page");
class MainC extends controller_1.controller {
    constructor() {
        super();
        this.bookC = new book_1.BookC();
        this.chapterC = new chapter_1.ChapterC();
        this.pageC = new page_1.PageC();
        this.pageC.init(this.chapterC.select.bind(this.chapterC));
        this.chapterC.init(this.bookC.select.bind(this.bookC), this.pageC.select.bind(this.pageC));
        this.bookC.init(this.chapterC.select.bind(this.chapterC));
        this.pageC.select(1);
    }
}
exports.MainC = MainC;
//# sourceMappingURL=main.js.map