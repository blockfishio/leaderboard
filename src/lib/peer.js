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
exports.PeerAPI = void 0;
const dcl_catalyst_client_1 = require("dcl-catalyst-client");
const api_1 = require("./api");
class PeerAPI extends api_1.BaseAPI {
    constructor(url) {
        super(url);
        this.cache = {};
        this.fetchProfile = (address) => __awaiter(this, void 0, void 0, function* () {
            if (address in this.cache) {
                return this.cache[address];
            }
            const promise = this.lambdasClient
                .fetchProfiles([address.toLowerCase()])
                .then(profiles => profiles[0]);
            this.cache[address] = promise;
            return promise;
        });
        this.lambdasClient = new dcl_catalyst_client_1.LambdasClient(`${url}/lambdas`);
    }
}
exports.PeerAPI = PeerAPI;
//# sourceMappingURL=peer.js.map