import { ChainId, Network } from '@dcl/schemas';
export declare const MANA_GRAPH_BY_CHAIN_ID: {
    1: string;
    3: string;
    5: string;
    4: string;
    137: string;
    80001: string;
    56: string;
    97: string;
};
declare type ChainConfiguration = {
    network: Network;
    manaGraphURL: string;
    rpcURL: string;
    networkMapping: Record<Network, ChainId>;
};
export declare function getChainConfiguration(chainId: ChainId): ChainConfiguration;
export { };
