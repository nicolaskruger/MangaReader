"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(elemet) {
        this.element = elemet;
    }
    set(models) {
        this.element.innerHTML = this.template(models);
    }
    setInvisibity(b, el = this.element) {
        if (b) {
            if (!el.classList.contains("inv")) {
                el.classList.add("inv");
            }
        }
        else {
            el.classList.remove("inv");
        }
    }
}
exports.View = View;
//# sourceMappingURL=View.js.map