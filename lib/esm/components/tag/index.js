import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { Icon, Icons } from '../icon';
var Tag = /** @class */ (function () {
    function Tag() {
    }
    Tag.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, label = attrs.label, intent = attrs.intent, size = attrs.size, rounded = attrs.rounded, onRemove = attrs.onRemove, htmlAttrs = __rest(attrs, ["class", "label", "intent", "size", "rounded", "onRemove"]);
        var classes = classnames(Classes.TAG, intent && "cui-".concat(intent), rounded && Classes.ROUNDED, onRemove && Classes.TAG_REMOVABLE, size && "cui-".concat(size), className);
        var content = [
            label,
            onRemove && m(Icon, {
                name: Icons.X,
                onclick: onRemove
            })
        ];
        return m('span', __assign(__assign({}, htmlAttrs), { class: classes }), content);
    };
    return Tag;
}());
export { Tag };
