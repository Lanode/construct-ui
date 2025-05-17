import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { Icon, Icons } from '../icon';
var Callout = /** @class */ (function () {
    function Callout() {
    }
    Callout.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var content = attrs.content, header = attrs.header, icon = attrs.icon, intent = attrs.intent, onDismiss = attrs.onDismiss, size = attrs.size, htmlAttrs = __rest(attrs, ["content", "header", "icon", "intent", "onDismiss", "size"]);
        var innerContent = [
            onDismiss && m(Icon, {
                class: Classes.CALLOUT_DISMISS_ICON,
                name: Icons.X,
                onclick: onDismiss
            }),
            icon && m(Icon, { name: icon }),
            header && m(".".concat(Classes.CALLOUT_HEADER), header),
            content && m(".".concat(Classes.CALLOUT_CONTENT), content)
        ];
        var classes = classnames(Classes.CALLOUT, icon && Classes.CALLOUT_ICON, intent && "cui-".concat(attrs.intent), size && "cui-".concat(attrs.size), attrs.class);
        return m('', __assign(__assign({}, htmlAttrs), { class: classes }), innerContent);
    };
    return Callout;
}());
export { Callout };
