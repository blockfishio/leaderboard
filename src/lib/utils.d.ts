import { Model, ModelById, DataByKey } from './types';
export declare function isMobile(): boolean;
export declare function insertScript({ type, async, ...props }: {
    [x: string]: any;
    type?: string | undefined;
    async?: boolean | undefined;
}): HTMLScriptElement;
export declare function toObjectById<T extends Model>(values: T[], currentValues?: ModelById<T>): ModelById<T>;
export declare function toObjectByKey<T extends Object>(values: T[], currentValues: DataByKey<T> | undefined, key: keyof T): DataByKey<T>;
export declare function distanceInWordsToNow(date: number | string, addSuffix?: boolean): string;
export declare function formatDate(date: number | string, format?: string): string;
export declare function formatDateTime(date: number | string, format?: string): string;
export declare function formatNumber(amount?: number, digits?: number): string;
