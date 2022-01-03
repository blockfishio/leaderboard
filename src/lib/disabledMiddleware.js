"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disabledMiddleware = void 0;
const disabledMiddleware = () => next => action => {
    next(action);
};
exports.disabledMiddleware = disabledMiddleware;
//# sourceMappingURL=disabledMiddleware.js.map