"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("./HttpServices");
class HttpPage extends HttpServices_1.HttpService {
    get pRoute() {
        return this.route() + `page/`;
    }
    selectByIdChap(id) {
        return this.get(`${this.pRoute}${id}`);
    }
}
exports.default = new HttpPage();
//# sourceMappingURL=HttpPage.js.map