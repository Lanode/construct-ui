export var TIMEOUT = 70;
export function hasClass(el, className) {
    return el.classList.contains(className);
}
export function hasChildClass(el, className) {
    return el.querySelector(".".concat(className));
}
export function triggerEvent(el, type, callback) {
    setTimeout(function () {
        el.dispatchEvent(new Event(type, { bubbles: true }));
        setTimeout(callback, TIMEOUT);
    }, TIMEOUT);
}
export function keyboardEvent(el, key) {
    el.dispatchEvent(new KeyboardEvent('keydown', { which: key, bubbles: true }));
}
