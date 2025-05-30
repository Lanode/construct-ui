"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Portal = /** @class */ (function () {
    function Portal() {
    }
    Portal.prototype.oncreate = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var rootElement = document.createElement('div');
        var container = attrs.container || document.body;
        container.appendChild(rootElement);
        this.rootElement = rootElement;
        this.setStyles(attrs);
        this.content = { view: function () { return children; } };
        mithril_1.default.mount(this.rootElement, this.content);
        (0, _shared_1.safeCall)(attrs.onContentMount, rootElement);
    };
    Portal.prototype.onupdate = function (_a) {
        var attrs = _a.attrs;
        this.setStyles(attrs);
    };
    Portal.prototype.onbeforeupdate = function (_a) {
        var children = _a.children;
        if (!this.content)
            return false;
        this.content.view = function () { return children; };
    };
    Portal.prototype.onremove = function (_a) {
        var attrs = _a.attrs;
        var container = attrs.container || document.body;
        if (container.contains(this.rootElement)) {
            mithril_1.default.mount(this.rootElement, null);
            container.removeChild(this.rootElement);
        }
    };
    Portal.prototype.view = function () {
        return mithril_1.default.fragment({}, '');
    };
    Portal.prototype.setStyles = function (attrs) {
        this.rootElement.className = (0, classnames_1.default)(_shared_1.Classes.PORTAL, attrs.class);
        this.rootElement.style.cssText = '';
        if (attrs.style) {
            Object.assign(this.rootElement.style, (0, _shared_1.normalizeStyle)(attrs.style));
        }
    };
    return Portal;
}());
exports.Portal = Portal;
