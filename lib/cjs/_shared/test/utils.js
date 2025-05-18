"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyboardEvent = exports.triggerEvent = exports.hasChildClass = exports.hasClass = exports.TIMEOUT = void 0;
exports.TIMEOUT = 70;
function hasClass(el, className) {
    return el.classList.contains(className);
}
exports.hasClass = hasClass;
function hasChildClass(el, className) {
    return el.querySelector(".".concat(className));
}
exports.hasChildClass = hasChildClass;
function triggerEvent(el, type, callback) {
    setTimeout(function () {
        el.dispatchEvent(new Event(type, { bubbles: true }));
        setTimeout(callback, exports.TIMEOUT);
    }, exports.TIMEOUT);
}
exports.triggerEvent = triggerEvent;
function keyboardEvent(el, key) {
    el.dispatchEvent(new KeyboardEvent('keydown', { which: key, bubbles: true }));
}
exports.keyboardEvent = keyboardEvent;
