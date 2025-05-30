import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var basic = attrs.basic, className = attrs.class, size = attrs.size, htmlAttrs = __rest(attrs, ["basic", "class", "size"]);
        var classes = classnames(Classes.MENU, basic && Classes.BASIC, size && "cui-".concat(size), className);
        return m('', __assign(__assign({}, htmlAttrs), { class: classes }), children);
    };
    return Menu;
}());
export { Menu };
