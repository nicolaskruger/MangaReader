"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const ViewPage_1 = __importDefault(require("../view/ViewPage"));
const Pages_1 = __importDefault(require("../model/Pages"));
const HttpBook_1 = __importDefault(require("../service/HttpBook"));
const BookView_1 = require("../view/class/BookView");
class BookC extends controller_1.controller {
    init(connect = (id) => { }) {
        this.connect = connect;
        this.select();
    }
    select() {
        return this.query(() => HttpBook_1.default.select())
            .then(() => {
            this.search = this.$(".S_inp");
            this.search.addEventListener("input", this.selectName.bind(this));
        });
    }
    selectName() {
        return this.queryEnd(() => HttpBook_1.default.selectName(this.search.value));
    }
    query(func) {
        return this.queryEnd(() => ViewPage_1.default.includeHtml(Pages_1.default.book)
            .then(() => {
            return func();
        }));
    }
    queryEnd(func) {
        return func()
            .then((s) => {
            new BookView_1.BookView(this.$(".Books"))
                .set(s);
            document.querySelectorAll(".Bk")
                .forEach((ss, i) => {
                ss.addEventListener("click", this.connect.bind(this, s[i].id));
            });
        })
            .catch(err => console.log(err));
    }
}
exports.BookC = BookC;
//# sourceMappingURL=book.js.map