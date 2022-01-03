"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumber = exports.formatDateTime = exports.formatDate = exports.distanceInWordsToNow = exports.toObjectByKey = exports.toObjectById = exports.insertScript = exports.isMobile = void 0;
const format_1 = __importDefault(require("date-fns/format"));
const distance_in_words_to_now_1 = __importDefault(require("date-fns/distance_in_words_to_now"));
const utils_1 = require("../modules/translation/utils");
function isMobile() {
    // WARN: Super naive mobile device check.
    // we're using it on low-stake checks, where failing to detect some browsers is not a big deal.
    // If you need more specificity you may want to change this implementation.
    const navigator = window.navigator;
    return (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent));
}
exports.isMobile = isMobile;
function insertScript(_a) {
    var { type = 'text/javascript', async = true } = _a, props = __rest(_a, ["type", "async"]);
    const script = document.createElement('script');
    Object.assign(script, Object.assign({ type, async: async }, props)); // WARN: babel breaks on `{ async }`
    document.body.appendChild(script);
    return script;
}
exports.insertScript = insertScript;
function toObjectById(values, currentValues = {}) {
    return toObjectByKey(values, currentValues, 'id');
}
exports.toObjectById = toObjectById;
function toObjectByKey(values, currentValues = {}, key) {
    return values.reduce((obj, value) => {
        obj[value[key]] = value;
        return obj;
    }, Object.assign({}, currentValues));
}
exports.toObjectByKey = toObjectByKey;
function distanceInWordsToNow(date, addSuffix = true) {
    return distance_in_words_to_now_1.default(date, {
        addSuffix,
        locale: utils_1.getCurrentLocale()
    });
}
exports.distanceInWordsToNow = distanceInWordsToNow;
function formatDate(date, format = 'MMMM Do, YYYY') {
    return format_1.default(date, format, {
        locale: utils_1.getCurrentLocale()
    });
}
exports.formatDate = formatDate;
function formatDateTime(date, format = 'MMMM Do, YYYY - hh:mm aa') {
    return format_1.default(date, format, {
        locale: utils_1.getCurrentLocale()
    });
}
exports.formatDateTime = formatDateTime;
function formatNumber(amount = 0, digits = 2) {
    return parseFloat((+amount).toFixed(digits)).toLocaleString();
}
exports.formatNumber = formatNumber;
//# sourceMappingURL=utils.js.map