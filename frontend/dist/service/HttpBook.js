"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpBook extends HttpServices_1.HttpService {
    get bRout() {
        return this.route() + `book`;
    }
    select() {
        return this.get(this.bRout);
    }
}
exports.default = new HttpBook();
//# sourceMappingURL=HttpBook.js.map