"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpChapter extends HttpServices_1.HttpService {
    get cRoute() {
        return this.route() + 'chapter/';
    }
    get idRoute() {
        return this.route() + 'chapterId/';
    }
    selectIdBook(id) {
        return this.get(`${this.cRoute}${id}`);
    }
    selectById(id) {
        return this.get(`${this.idRoute}${id}`);
    }
}
exports.default = new HttpChapter();
//# sourceMappingURL=HttpChapter.js.map