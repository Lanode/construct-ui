import { __assign, __rest } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Classes } from '../../_shared';
var BaseControl = /** @class */ (function () {
    function BaseControl() {
    }
    BaseControl.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, _b = attrs.containerAttrs, containerAttrs = _b === void 0 ? {} : _b, intent = attrs.intent, label = attrs.label, size = attrs.size, type = attrs.type, typeClass = attrs.typeClass, style = attrs.style, htmlAttrs = __rest(attrs, ["class", "containerAttrs", "intent", "label", "size", "type", "typeClass", "style"]);
        var classes = classnames(Classes.CONTROL, typeClass, htmlAttrs.disabled && Classes.DISABLED, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var content = [
            m('input', __assign(__assign({}, htmlAttrs), { disabled: htmlAttrs.disabled || htmlAttrs.readonly, type: type })),
            m("span.".concat(Classes.CONTROL_INDICATOR)),
            label
        ];
        return m('label', __assign({ class: classes, style: style }, containerAttrs), content);
    };
    return BaseControl;
}());
export { BaseControl };
