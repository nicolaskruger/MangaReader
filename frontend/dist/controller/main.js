"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./book");
const controller_1 = require("./controller");
class MainC extends controller_1.controller {
    constructor() {
        super();
        this.bookC = new book_1.BookC();
        this.bookC.select();
    }
}
exports.MainC = MainC;
//# sourceMappingURL=main.js.map