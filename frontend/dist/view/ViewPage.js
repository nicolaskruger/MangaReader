"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServices_1 = require("../service/HttpServices");
const View_1 = require("./View");
class ViewPage extends View_1.View {
    template(models) {
    }
    includeHtml(models) {
        let http = new HttpServices_1.HttpService();
        return fetch(http.route() + `view/${models}`)
            .then(s => {
            return s.text();
        })
            .then(s => {
            this.element.innerHTML = s;
        })
            .catch(err => console.log(err));
    }
    constructor(element) {
        super(element);
    }
}
exports.default = new ViewPage(document.querySelector(".Principal"));
//# sourceMappingURL=ViewPage.js.map