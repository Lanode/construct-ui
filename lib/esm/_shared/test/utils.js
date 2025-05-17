import { __awaiter, __generator } from "tslib";
export var TIMEOUT = 70;
export function hasClass(el, className) {
    return el.classList.contains(className);
}
export function hasChildClass(el, className) {
    return el.querySelector(".".concat(className));
}
export function triggerEvent(el, type) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sleep(TIMEOUT)];
                case 1:
                    _a.sent();
                    el.dispatchEvent(new Event(type, { bubbles: true }));
                    return [4 /*yield*/, sleep(TIMEOUT)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function keyboardEvent(el, key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    el.dispatchEvent(new KeyboardEvent('keydown', { which: key, bubbles: true }));
                    return [4 /*yield*/, sleep(TIMEOUT)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export var sleep = function (milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return new Promise(function (r) { return setTimeout(r, milliseconds); });
};
