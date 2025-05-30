"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var TextArea = /** @class */ (function () {
    function TextArea() {
    }
    TextArea.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var basic = attrs.basic, className = attrs.class, disabled = attrs.disabled, fluid = attrs.fluid, intent = attrs.intent, size = attrs.size, style = attrs.style, htmlAttrs = tslib_1.__rest(attrs, ["basic", "class", "disabled", "fluid", "intent", "size", "style"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.INPUT, _shared_1.Classes.TEXT_AREA, basic && _shared_1.Classes.BASIC, disabled && _shared_1.Classes.DISABLED, fluid && _shared_1.Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        return (0, mithril_1.default)('', { class: classes, style: style }, (0, mithril_1.default)('textarea', tslib_1.__assign({}, htmlAttrs)));
    };
    return TextArea;
}());
exports.TextArea = TextArea;
