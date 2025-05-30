"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var __1 = require("../..");
var popover_1 = require("../popover");
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var size = attrs.size, className = attrs.class, otherAttrs = tslib_1.__rest(attrs, ["size", "class"]);
        var classes = (0, classnames_1.default)(__1.Classes.TOOLTIP, size && "cui-".concat(size), className);
        return (0, mithril_1.default)(popover_1.Popover, tslib_1.__assign(tslib_1.__assign({ addToStack: false, triggerActiveClass: '' }, otherAttrs), { class: classes, interactionType: 'hover-trigger' }));
    };
    return Tooltip;
}());
exports.Tooltip = Tooltip;
