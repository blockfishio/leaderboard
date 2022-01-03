import { AxiosRequestConfig } from 'axios';
export declare type APIMethod = AxiosRequestConfig['method'];
export interface APIParam {
    [key: string]: any;
}
export declare class BaseAPI {
    url: string;
    constructor(url: string);
    request(method: APIMethod, path: string, params?: APIParam | null, axiosRequestConfig?: AxiosRequestConfig): Promise<any>;
    getUrl(path: string): string;
    private parseResponse;
}
