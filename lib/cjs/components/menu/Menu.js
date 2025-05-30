"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var basic = attrs.basic, className = attrs.class, size = attrs.size, htmlAttrs = tslib_1.__rest(attrs, ["basic", "class", "size"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.MENU, basic && _shared_1.Classes.BASIC, size && "cui-".concat(size), className);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), children);
    };
    return Menu;
}());
exports.Menu = Menu;
