"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainConfiguration = exports.MANA_GRAPH_BY_CHAIN_ID = void 0;
const schemas_1 = require("@dcl/schemas");
const decentraland_connect_1 = require("decentraland-connect");
exports.MANA_GRAPH_BY_CHAIN_ID = {
    [schemas_1.ChainId.ETHEREUM_MAINNET]: 'https://api.thegraph.com/subgraphs/name/blockfishio/spay',
    // [schemas_1.ChainId.ETHEREUM_ROPSTEN]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-ropsten',
    [schemas_1.ChainId.ETHEREUM_ROPSTEN]: 'https://api.thegraph.com/subgraphs/name/silver211/spayropsten',
    [schemas_1.ChainId.ETHEREUM_GOERLI]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-goerli',
    [schemas_1.ChainId.ETHEREUM_RINKEBY]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-rinkeby',
    [schemas_1.ChainId.MATIC_MAINNET]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-matic-mainnet',
    [schemas_1.ChainId.MATIC_MUMBAI]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-matic-mumbai',
    [schemas_1.ChainId.BSC_MAINNET]: 'https://api.thegraph.com/subgraphs/name/blockfishio/spaybsc',
    [schemas_1.ChainId.BSC_TESTNET]: 'https://api.thegraph.com/subgraphs/name/blockfishio/spaybsctest',



};
const NETWORK_MAPPING_BY_CHAIN_ID = {
    [schemas_1.ChainId.ETHEREUM_MAINNET]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.ETHEREUM_MAINNET,
        [schemas_1.Network.BSC]: schemas_1.ChainId.BSC_MAINNET
    },
    [schemas_1.ChainId.ETHEREUM_ROPSTEN]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.ETHEREUM_ROPSTEN,
        [schemas_1.Network.BSC]: schemas_1.ChainId.BSC_TESTNET
    },
    [schemas_1.ChainId.ETHEREUM_GOERLI]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.ETHEREUM_GOERLI,
        [schemas_1.Network.MATIC]: schemas_1.ChainId.MATIC_MUMBAI
    },
    [schemas_1.ChainId.ETHEREUM_RINKEBY]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.ETHEREUM_RINKEBY,
        [schemas_1.Network.MATIC]: schemas_1.ChainId.MATIC_MUMBAI
    },
    [schemas_1.ChainId.MATIC_MAINNET]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.MATIC_MAINNET,
        [schemas_1.Network.MATIC]: schemas_1.ChainId.MATIC_MAINNET
    },
    [schemas_1.ChainId.MATIC_MUMBAI]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.MATIC_MUMBAI,
        [schemas_1.Network.MATIC]: schemas_1.ChainId.MATIC_MUMBAI
    },
    [schemas_1.ChainId.BSC_MAINNET]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.ETHEREUM_MAINNET,
        [schemas_1.Network.BSC]: schemas_1.ChainId.BSC_MAINNET
    },
    [schemas_1.ChainId.BSC_TESTNET]: {
        [schemas_1.Network.ETHEREUM]: schemas_1.ChainId.ETHEREUM_ROPSTEN,
        [schemas_1.Network.BSC]: schemas_1.ChainId.BSC_TESTNET
    },

};
const NETWORK_BY_CHAIN_ID = {
    [schemas_1.ChainId.ETHEREUM_MAINNET]: schemas_1.Network.ETHEREUM,
    [schemas_1.ChainId.ETHEREUM_ROPSTEN]: schemas_1.Network.ETHEREUM,
    [schemas_1.ChainId.ETHEREUM_GOERLI]: schemas_1.Network.ETHEREUM,
    [schemas_1.ChainId.ETHEREUM_KOVAN]: schemas_1.Network.ETHEREUM,
    [schemas_1.ChainId.ETHEREUM_RINKEBY]: schemas_1.Network.ETHEREUM,
    [schemas_1.ChainId.MATIC_MAINNET]: schemas_1.Network.MATIC,
    [schemas_1.ChainId.MATIC_MUMBAI]: schemas_1.Network.MATIC,
    [schemas_1.ChainId.BSC_MAINNET]: schemas_1.Network.BSC,
    [schemas_1.ChainId.BSC_TESTNET]: schemas_1.Network.BSC,

};
function getChainConfiguration(chainId) {
    return {
        network: NETWORK_BY_CHAIN_ID[chainId],
        manaGraphURL: exports.MANA_GRAPH_BY_CHAIN_ID[chainId],
        rpcURL: decentraland_connect_1.RPC_URLS[chainId],
        networkMapping: NETWORK_MAPPING_BY_CHAIN_ID[chainId]
    };
}
exports.getChainConfiguration = getChainConfiguration;
//# sourceMappingURL=chainConfiguration.js.map