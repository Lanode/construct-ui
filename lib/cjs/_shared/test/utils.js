"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.keyboardEvent = exports.triggerEvent = exports.hasChildClass = exports.hasClass = exports.TIMEOUT = void 0;
var tslib_1 = require("tslib");
exports.TIMEOUT = 70;
function hasClass(el, className) {
    return el.classList.contains(className);
}
exports.hasClass = hasClass;
function hasChildClass(el, className) {
    return el.querySelector(".".concat(className));
}
exports.hasChildClass = hasChildClass;
function triggerEvent(el, type) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, exports.sleep)(exports.TIMEOUT)];
                case 1:
                    _a.sent();
                    el.dispatchEvent(new Event(type, { bubbles: true }));
                    return [4 /*yield*/, (0, exports.sleep)(exports.TIMEOUT)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.triggerEvent = triggerEvent;
function keyboardEvent(el, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    el.dispatchEvent(new KeyboardEvent('keydown', { which: key, bubbles: true }));
                    return [4 /*yield*/, (0, exports.sleep)(exports.TIMEOUT)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.keyboardEvent = keyboardEvent;
var sleep = function (milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return new Promise(function (r) { return setTimeout(r, milliseconds); });
};
exports.sleep = sleep;
