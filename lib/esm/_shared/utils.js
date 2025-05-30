import { Classes } from '.';
export function isFunction(value) {
    return typeof value === 'function';
}
export function safeCall(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(func)) {
        return func.apply(void 0, args);
    }
}
export function getScrollbarWidth() {
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
export function hasScrollbar(el) {
    return el.scrollHeight > window.innerHeight;
}
export function elementIsOrContains(element, testElement) {
    return element === testElement || element.contains(testElement);
}
export function normalizeStyle(style) {
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
export function updateElementGroupPadding(containerEl, contentLeft, contentRight) {
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
function shouldAddPadding(element) {
    return element &&
        !element.classList.contains(Classes.ICON) &&
        !element.classList.contains(Classes.SPINNER) &&
        !element.classList.contains(Classes.BUTTON_ICON);
}
export function isNullOrEmpty(item) {
    return item == null || item === '' || item === false;
}
export var getObjectKeys = Object.keys;
