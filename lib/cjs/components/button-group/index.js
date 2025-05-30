"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    ButtonGroup.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, size = attrs.size, fluid = attrs.fluid, intent = attrs.intent, rounded = attrs.rounded, outlined = attrs.outlined, basic = attrs.basic, htmlAttrs = tslib_1.__rest(attrs, ["class", "size", "fluid", "intent", "rounded", "outlined", "basic"]);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.BUTTON_GROUP, rounded && _shared_1.Classes.ROUNDED, fluid && _shared_1.Classes.FLUID, basic && _shared_1.Classes.BASIC, outlined && _shared_1.Classes.OUTLINED, intent && "cui-".concat(intent), size && "cui-".concat(size), className) }), children);
    };
    return ButtonGroup;
}());
exports.ButtonGroup = ButtonGroup;
