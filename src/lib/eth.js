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
exports.isValidChainId = exports.isDapperProvider = exports.isCucumberProvider = exports.getConnectedProviderChainId = exports.getConnectedProviderType = exports.getConnectedProvider = exports.getNetworkProvider = void 0;
const schemas_1 = require("@dcl/schemas");
const decentraland_connect_1 = require("decentraland-connect");
const utils_1 = require("./utils");
function getNetworkProvider(chainId) {
    return __awaiter(this, void 0, void 0, function* () {
        /*
          We check if the connected provider is from the same chainId, if so we return that one instead of creating one.
          This is to avoid using our own RPCs that much, and use the ones provided by the provider when possible.
        */
        if (getConnectedProviderChainId() === chainId) {
            const connectedProvider = yield getConnectedProvider();
            if (connectedProvider) {
                return connectedProvider;
            }
        }
        return decentraland_connect_1.connection.createProvider(decentraland_connect_1.ProviderType.NETWORK, chainId);
    });
}
exports.getNetworkProvider = getNetworkProvider;
function getConnectedProvider() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { provider } = yield decentraland_connect_1.connection.tryPreviousConnection();
            return provider ? provider : null;
        }
        catch (error) {
            return null;
        }
    });
}
exports.getConnectedProvider = getConnectedProvider;
function getConnectedProviderType() {
    const connectionData = decentraland_connect_1.connection.getConnectionData();
    return connectionData ? connectionData.providerType : null;
}
exports.getConnectedProviderType = getConnectedProviderType;
function getConnectedProviderChainId() {
    const connectionData = decentraland_connect_1.connection.getConnectionData();
    return connectionData ? connectionData.chainId : null;
}
exports.getConnectedProviderChainId = getConnectedProviderChainId;
function getConnectedProviderAllowedIds() {
    const connectionData = decentraland_connect_1.connection.getConnectionData();
    return connectionData ? connectionData.allowedIds : null;
}
exports.getConnectedProviderAllowedIds = getConnectedProviderAllowedIds;
function isCucumberProvider() {
    const provider = window.ethereum;
    return utils_1.isMobile() && !!provider && !!provider.isCucumber;
}
exports.isCucumberProvider = isCucumberProvider;
function isDapperProvider() {
    const provider = window.ethereum;
    return !!provider && !!provider.isDapper;
}
exports.isDapperProvider = isDapperProvider;
function isValidChainId(chainId) {
    return Object.values(schemas_1.ChainId).includes(Number(chainId));
}
exports.isValidChainId = isValidChainId;
//# sourceMappingURL=eth.js.map