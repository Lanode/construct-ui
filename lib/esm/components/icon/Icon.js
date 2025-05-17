import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { IconContents } from './generated';
var Icon = /** @class */ (function () {
    function Icon() {
    }
    Icon.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, intent = attrs.intent, name = attrs.name, onclick = attrs.onclick, size = attrs.size, htmlAttrs = __rest(attrs, ["class", "intent", "name", "onclick", "size"]);
        var classes = classnames(Classes.ICON, "".concat(Classes.ICON, "-").concat(name), intent && "cui-".concat(intent), size && "cui-".concat(size), onclick && Classes.ICON_ACTION, className);
        var svg = m.trust("<svg viewBox='0 0 24 24'>".concat(IconContents[name], "</svg>"));
        return m('', __assign(__assign({}, htmlAttrs), { class: classes, onclick: onclick }), svg);
    };
    return Icon;
}());
export { Icon };
