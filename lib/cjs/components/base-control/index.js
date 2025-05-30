"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseControl = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var BaseControl = /** @class */ (function () {
    function BaseControl() {
    }
    BaseControl.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, _b = attrs.containerAttrs, containerAttrs = _b === void 0 ? {} : _b, intent = attrs.intent, label = attrs.label, size = attrs.size, type = attrs.type, typeClass = attrs.typeClass, style = attrs.style, htmlAttrs = tslib_1.__rest(attrs, ["class", "containerAttrs", "intent", "label", "size", "type", "typeClass", "style"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.CONTROL, typeClass, htmlAttrs.disabled && _shared_1.Classes.DISABLED, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var content = [
            (0, mithril_1.default)('input', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { disabled: htmlAttrs.disabled || htmlAttrs.readonly, type: type })),
            (0, mithril_1.default)("span.".concat(_shared_1.Classes.CONTROL_INDICATOR)),
            label
        ];
        return (0, mithril_1.default)('label', tslib_1.__assign({ class: classes, style: style }, containerAttrs), content);
    };
    return BaseControl;
}());
exports.BaseControl = BaseControl;
