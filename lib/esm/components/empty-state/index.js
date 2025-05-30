import { __assign, __rest } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Classes } from '../../_shared';
import { Icon } from '../icon';
var EmptyState = /** @class */ (function () {
    function EmptyState() {
    }
    EmptyState.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, _b = attrs.fill, fill = _b === void 0 ? true : _b, icon = attrs.icon, header = attrs.header, content = attrs.content, htmlAttrs = __rest(attrs, ["class", "fill", "icon", "header", "content"]);
        var classes = classnames(Classes.EMPTY_STATE, fill && Classes.EMPTY_STATE_FILL, className);
        var container = [
            icon && m(".".concat(Classes.EMPTY_STATE_ICON), [
                typeof icon === 'string'
                    ? m(Icon, { name: icon })
                    : icon
            ]),
            header && m(".".concat(Classes.EMPTY_STATE_HEADER), header),
            content && m(".".concat(Classes.EMPTY_STATE_CONTENT), content)
        ];
        return m('', __assign(__assign({}, htmlAttrs), { class: classes }), container);
    };
    return EmptyState;
}());
export { EmptyState };
