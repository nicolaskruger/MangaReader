"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpService {
    constructor() {
    }
    route() {
        return 'http://localhost:3000/';
    }
    _handleErros(res) {
        if (res.ok)
            return res;
        throw res;
    }
    get(url) {
        return fetch(url)
            .then(res => this._handleErros(res))
            .then(res => res.json());
    }
    post(url, dado) {
        return fetch(url, {
            headers: { 'Content-type': 'application/json' },
            method: 'post',
            body: JSON.stringify(dado)
        })
            .then(res => this._handleErros(res));
    }
    postFD(url, dado) {
        return fetch(url, {
            method: 'post',
            body: dado
        })
            .then(res => this._handleErros(res));
    }
    put(url, dado) {
        return fetch(url, {
            headers: { 'Content-type': 'application/json' },
            method: 'put',
            body: JSON.stringify(dado)
        })
            .then(res => this._handleErros(res));
    }
    putFD(url, dado) {
        return fetch(url, {
            method: 'put',
            body: dado
        })
            .then(res => this._handleErros(res));
    }
    del(url) {
        return fetch(url, {
            headers: { 'Content-type': 'application/json' },
            method: 'delete',
            redirect: 'follow',
        })
            .then(res => {
            console.log(res);
            window.location.href = res.url;
            return this._handleErros(res);
        });
    }
}
exports.HttpService = HttpService;
//# sourceMappingURL=HttpServices.js.map