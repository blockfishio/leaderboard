"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphql = void 0;
function graphql(url, query, retryDelay = 500, retryAttempts = 10) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fetch(url, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query
                })
            }).then(resp => resp.json());
            if (!result || !result.data || Object.keys(result.data).length === 0) {
                throw new Error('Invalid response');
            }
            return result.data;
        }
        catch (error) {
            // some naive retry logic
            return new Promise((resolve, reject) => {
                setTimeout(() => 
                // duplicate delay time on each attempt if there are attempts left
                retryAttempts > 0
                    ? graphql(url, query, retryDelay * 2, retryAttempts - 1).then(result => resolve(result))
                    : reject(), retryDelay);
            });
        }
    });
}
exports.graphql = graphql;
//# sourceMappingURL=graph.js.map