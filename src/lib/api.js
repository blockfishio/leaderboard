"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const httpClient = axios_1.default.create();
class BaseAPI {
    constructor(url) {
        this.url = url;
    }
    request(method, path, params = null, axiosRequestConfig = {}) {
        let options = Object.assign(Object.assign({}, axiosRequestConfig), { method, url: this.getUrl(path) });
        if (params) {
            if (method === 'get') {
                options.params = params;
            }
            else {
                options.data = params;
            }
        }
        return httpClient
            .request(options)
            .then((axiosResponse) => {
            const { ok, data, error } = this.parseResponse(axiosResponse);
            return !ok || error ? Promise.reject({ message: error, data }) : data;
        })
            .catch((error) => {
            console.warn(`[API] HTTP request failed: ${error.message || ''}`, error);
            return Promise.reject(error);
        });
    }
    getUrl(path) {
        return `${this.url}${path}`;
    }
    parseResponse(axiosResponse) {
        const response = axiosResponse.data;
        if (typeof response.ok === 'boolean') {
            return response;
        }
        return { ok: true, data: response, error: '' };
    }
}
exports.BaseAPI = BaseAPI;
//# sourceMappingURL=api.js.map