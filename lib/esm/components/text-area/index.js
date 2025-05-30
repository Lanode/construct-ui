import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
var TextArea = /** @class */ (function () {
    function TextArea() {
    }
    TextArea.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var basic = attrs.basic, className = attrs.class, disabled = attrs.disabled, fluid = attrs.fluid, intent = attrs.intent, size = attrs.size, style = attrs.style, htmlAttrs = __rest(attrs, ["basic", "class", "disabled", "fluid", "intent", "size", "style"]);
        var classes = classnames(Classes.INPUT, Classes.TEXT_AREA, basic && Classes.BASIC, disabled && Classes.DISABLED, fluid && Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        return m('', { class: classes, style: style }, m('textarea', __assign({}, htmlAttrs)));
    };
    return TextArea;
}());
export { TextArea };
