declare module 'react-intl';
export interface DataByKey<T> {
    [key: string]: T;
}
export interface Model extends Object {
    id: string;
}
export interface AddressModel extends Object {
    address: string;
}
export declare type ModelById<T extends Model> = DataByKey<T>;
export declare type ModelByAddress<T extends AddressModel> = DataByKey<T>;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type Overwrite<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>> & T2;
export interface Migrations<T> {
    [key: string]: (data: T) => T;
}
export interface LocalStorage {
    getItem: (key?: string) => string | null;
    setItem: (key?: string, value?: string) => void | null;
    removeItem: (key?: string) => void | null;
}
