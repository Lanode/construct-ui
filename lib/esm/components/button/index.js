import { __assign, __rest } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Icon } from '../icon';
import { Spinner } from '../spinner';
import { Classes, isNullOrEmpty } from '../../_shared';
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var _b = attrs.align, align = _b === void 0 ? 'center' : _b, active = attrs.active, basic = attrs.basic, compact = attrs.compact, className = attrs.class, disabled = attrs.disabled, fluid = attrs.fluid, href = attrs.href, iconLeft = attrs.iconLeft, iconLeftAttrs = attrs.iconLeftAttrs, iconRight = attrs.iconRight, iconRightAttrs = attrs.iconRightAttrs, intent = attrs.intent, loading = attrs.loading, label = attrs.label, onclick = attrs.onclick, outlined = attrs.outlined, rounded = attrs.rounded, size = attrs.size, sublabel = attrs.sublabel, htmlAttrs = __rest(attrs, ["align", "active", "basic", "compact", "class", "disabled", "fluid", "href", "iconLeft", "iconLeftAttrs", "iconRight", "iconRightAttrs", "intent", "loading", "label", "onclick", "outlined", "rounded", "size", "sublabel"]);
        var tag = href ? 'a' : 'button';
        var isAnchor = tag === 'a';
        var classes = classnames(Classes.BUTTON, align && "".concat(Classes.ALIGN, "-").concat(align), active && Classes.ACTIVE, compact && Classes.COMPACT, disabled && Classes.DISABLED, fluid && Classes.FLUID, loading && Classes.LOADING, size && "cui-".concat(size), intent && "cui-".concat(intent), rounded && Classes.ROUNDED, basic && Classes.BASIC, outlined && Classes.OUTLINED, isNullOrEmpty(label) && isNullOrEmpty(sublabel) && (!iconLeft || !iconRight) && Classes.BUTTON_ICON, className);
        var content = [
            loading && m(Spinner, { active: true, fill: true }),
            iconLeft && m(Icon, __assign({ name: iconLeft }, iconLeftAttrs)),
            !isNullOrEmpty(sublabel) && m('span', { class: Classes.BUTTON_SUBLABEL }, sublabel),
            !isNullOrEmpty(label) && m('span', { class: Classes.BUTTON_LABEL }, label),
            iconRight && m(Icon, __assign({ name: iconRight }, iconRightAttrs))
        ];
        return m(tag, __assign(__assign({ type: isAnchor ? undefined : 'button', role: isAnchor ? 'button' : undefined }, htmlAttrs), { class: classes, disabled: disabled, 
            // Undefined attrs are not removed on redraw. See https://github.com/MithrilJS/mithril.js/pull/1865#issuecomment-382990558'
            href: disabled ? undefined : href, onclick: disabled ? undefined : onclick, tabIndex: disabled ? undefined : htmlAttrs.tabIndex }), content);
    };
    return Button;
}());
export { Button };
