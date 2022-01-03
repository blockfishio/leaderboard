"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateStorage = exports.getLocalStorage = exports.hasLocalStorage = void 0;
function hasLocalStorage() {
    try {
        // https://gist.github.com/paulirish/5558557
        const localStorage = window.localStorage;
        const val = 'val';
        localStorage.setItem(val, val);
        localStorage.removeItem(val);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.hasLocalStorage = hasLocalStorage;
function getLocalStorage() {
    return hasLocalStorage()
        ? window.localStorage
        : {
            getItem: () => null,
            setItem: () => null,
            removeItem: () => null
        };
}
exports.getLocalStorage = getLocalStorage;
function migrateStorage(key, migrations) {
    let version = 1;
    const localStorage = getLocalStorage();
    const dataString = localStorage.getItem(key);
    if (dataString) {
        let data = JSON.parse(dataString);
        if (data.storage && data.storage.version) {
            version = parseInt(data.storage.version, 10);
        }
        let nextVersion = version + 1;
        while (migrations[nextVersion]) {
            data = migrations[nextVersion](data);
            if (!data.storage) {
                data.storage = {};
            }
            data.storage.version = nextVersion;
            nextVersion++;
        }
        return data;
    }
    return null;
}
exports.migrateStorage = migrateStorage;
//# sourceMappingURL=localStorage.js.map