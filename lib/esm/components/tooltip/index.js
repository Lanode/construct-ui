import { __assign, __rest } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Classes } from '../..';
import { Popover } from '../popover';
var Tooltip = /** @class */ (function () {
    function Tooltip() {
    }
    Tooltip.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var size = attrs.size, className = attrs.class, otherAttrs = __rest(attrs, ["size", "class"]);
        var classes = classnames(Classes.TOOLTIP, size && "cui-".concat(size), className);
        return m(Popover, __assign(__assign({ addToStack: false, triggerActiveClass: '' }, otherAttrs), { class: classes, interactionType: 'hover-trigger' }));
    };
    return Tooltip;
}());
export { Tooltip };
