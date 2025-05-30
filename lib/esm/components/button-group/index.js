import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
var ButtonGroup = /** @class */ (function () {
    function ButtonGroup() {
    }
    ButtonGroup.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, size = attrs.size, fluid = attrs.fluid, intent = attrs.intent, rounded = attrs.rounded, outlined = attrs.outlined, basic = attrs.basic, htmlAttrs = __rest(attrs, ["class", "size", "fluid", "intent", "rounded", "outlined", "basic"]);
        return m('', __assign(__assign({}, htmlAttrs), { class: classnames(Classes.BUTTON_GROUP, rounded && Classes.ROUNDED, fluid && Classes.FLUID, basic && Classes.BASIC, outlined && Classes.OUTLINED, intent && "cui-".concat(intent), size && "cui-".concat(size), className) }), children);
    };
    return ButtonGroup;
}());
export { ButtonGroup };
