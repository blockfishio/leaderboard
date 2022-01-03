import { ChainId } from '@dcl/schemas';
import { ProviderType, Provider } from 'decentraland-connect';
export declare type EthereumWindow = Window & {
    ethereum?: Provider & {
        enable?: () => Promise<string[]>;
        isCucumber?: boolean;
        isDapper?: boolean;
    };
};
export declare function getNetworkProvider(chainId: ChainId): Promise<Provider>;
export declare function getConnectedProvider(): Promise<Provider | null>;
export declare function getConnectedProviderType(): ProviderType | null;
export declare function getConnectedProviderChainId(): ChainId | null;
export declare function getConnectedProviderAllowedIds(): ChainId[] | null;

export declare function isCucumberProvider(): boolean;
export declare function isDapperProvider(): boolean;
export declare function isValidChainId(chainId: string | number): boolean;
