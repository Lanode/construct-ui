"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectKeys = exports.isNullOrEmpty = exports.updateElementGroupPadding = exports.normalizeStyle = exports.elementIsOrContains = exports.hasScrollbar = exports.getScrollbarWidth = exports.safeCall = exports.isFunction = void 0;
var _1 = require(".");
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function safeCall(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
}
exports.safeCall = safeCall;
function getScrollbarWidth() {
    var el = document.createElement('div');
    el.style.width = '100px';
    el.style.height = '100px';
    el.style.overflow = 'scroll';
    el.style.position = 'absolute';
    el.style.top = '-9999px';
    document.body.appendChild(el);
    var scrollbarWidth = el.offsetWidth - el.clientWidth;
    document.body.removeChild(el);
    return scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
function hasScrollbar(el) {
    return el.scrollHeight > window.innerHeight;
}
exports.hasScrollbar = hasScrollbar;
function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
exports.elementIsOrContains = elementIsOrContains;
function normalizeStyle(style) {
    if (typeof style === 'string') {
        var result = {};
        var attributes = style.replace(/\s/g, '').split(';');
        for (var i = 0; i < attributes.length; i++) {
            var entry = attributes[i].split(':');
            result[entry.splice(0, 1)[0]] = entry.join(':');
        }
        return result;
    }
    else
        return style;
}
exports.normalizeStyle = normalizeStyle;
function updateElementGroupPadding(containerEl, contentLeft, contentRight) {
    if (!containerEl)
        return;
    var containerPadding = Math.floor(containerEl.clientHeight / 1.6);
    if (contentLeft) {
        var contentLeftEl = contentLeft.dom;
        containerEl.style.paddingLeft = shouldAddPadding(contentLeftEl)
            ? "".concat(contentLeftEl.clientWidth + containerPadding, "px")
            : '';
    }
    else
        containerEl.style.paddingLeft = '';
    if (contentRight) {
        var contentRightEl = contentRight.dom;
        containerEl.style.paddingRight = shouldAddPadding(contentRightEl)
            ? "".concat(contentRightEl.clientWidth + containerPadding, "px")
            : '';
    }
    else
        containerEl.style.paddingRight = '';
}
exports.updateElementGroupPadding = updateElementGroupPadding;
function shouldAddPadding(element) {
    return element &&
        !element.classList.contains(_1.Classes.ICON) &&
        !element.classList.contains(_1.Classes.SPINNER) &&
        !element.classList.contains(_1.Classes.BUTTON_ICON);
}
function isNullOrEmpty(item) {
    return item == null || item === '' || item === false;
}
exports.isNullOrEmpty = isNullOrEmpty;
exports.getObjectKeys = Object.keys;
