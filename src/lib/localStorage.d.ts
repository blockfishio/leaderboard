import { Migrations, LocalStorage } from './types';
export declare function hasLocalStorage(): boolean;
export declare function getLocalStorage(): LocalStorage;
export declare function migrateStorage<T>(key: string, migrations: Migrations<T>): T | null;
