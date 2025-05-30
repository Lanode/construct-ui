"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Tabs = /** @class */ (function () {
    function Tabs() {
    }
    Tabs.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var align = attrs.align, bordered = attrs.bordered, fluid = attrs.fluid, size = attrs.size, classname = attrs.class, htmlAttrs = tslib_1.__rest(attrs, ["align", "bordered", "fluid", "size", "class"]);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.TABS, align && "cui-align-".concat(align), bordered && _shared_1.Classes.TABS_BORDERED, fluid && _shared_1.Classes.FLUID, size && "cui-".concat(size), classname) }), children);
    };
    return Tabs;
}());
exports.Tabs = Tabs;
