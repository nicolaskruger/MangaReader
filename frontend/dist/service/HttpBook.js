"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpBook extends HttpServices_1.HttpService {
    get bRout() {
        return this.route() + `book/`;
    }
    get nRoute() {
        return this.route() + `bookName/`;
    }
    select() {
        return this.get(this.bRout);
    }
    selectId(id) {
        return this.get(`${this.bRout}${id}`);
    }
    selectName(name) {
        return this.get(this.nRoute + name);
    }
}
exports.default = new HttpBook();
//# sourceMappingURL=HttpBook.js.map