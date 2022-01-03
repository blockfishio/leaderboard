"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const localStorage_1 = require("./localStorage");
let fakeStore = {};
global.window = {};
describe('localStorage', function () {
    const migrations = {
        2: (data) => (Object.assign(Object.assign({}, data), { data: 'new version' }))
    };
    beforeEach(function () {
        fakeStore = {};
        global.window['localStorage'] = {
            getItem: (key) => fakeStore[key],
            setItem: (key, value) => (fakeStore[key] = value),
            removeItem: (key) => delete fakeStore[key]
        };
    });
    describe('hasLocalStorage', function () {
        it('should return false if localStorage is not available', function () {
            delete global.window['localStorage'];
            chai_1.expect(localStorage_1.hasLocalStorage()).to.equal(false);
        });
        it('should return true if localStorage is available', function () {
            chai_1.expect(localStorage_1.hasLocalStorage()).to.equal(true);
        });
    });
    describe('migrateStorage', function () {
        it('should migrate', function () {
            const key = 'key';
            const localStorage = localStorage_1.getLocalStorage();
            localStorage.setItem(key, JSON.stringify('{}'));
            const data = localStorage_1.migrateStorage(key, migrations);
            chai_1.expect(data.storage.version).to.equal(2);
            chai_1.expect(data.data).to.equal('new version');
        });
        it('should set corrent version', function () {
            const key = 'key';
            const localStorage = localStorage_1.getLocalStorage();
            localStorage.setItem(key, JSON.stringify('{ storage: { version: null }}'));
            const data = localStorage_1.migrateStorage(key, migrations);
            chai_1.expect(data.storage.version).to.equal(2);
        });
        it('should not migrate if there is no migrations left', function () {
            const key = 'key';
            const localStorage = localStorage_1.getLocalStorage();
            localStorage.setItem(key, JSON.stringify('{}'));
            let data = localStorage_1.migrateStorage(key, migrations);
            chai_1.expect(data.storage.version).to.equal(2);
            localStorage.setItem(key, JSON.stringify(data));
            data = localStorage_1.migrateStorage(key, migrations);
            chai_1.expect(data.storage.version).to.equal(2);
        });
    });
});
//# sourceMappingURL=localStorage.spec.js.map