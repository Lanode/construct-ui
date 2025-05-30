import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { Overlay } from '../overlay';
export var DrawerPosition = {
    TOP: 'top',
    BOTTOM: 'bottom',
    RIGHT: 'right',
    LEFT: 'left'
};
var Drawer = /** @class */ (function () {
    function Drawer() {
    }
    Drawer.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var position = attrs.position, content = attrs.content, className = attrs.class, style = attrs.style, otherAttrs = __rest(attrs, ["position", "content", "class", "style"]);
        var innerContent = m(".".concat(Classes.DRAWER_CONTENT), content);
        var classes = classnames(Classes.DRAWER, "".concat(Classes.DRAWER, "-").concat(position), className);
        var container = m('', { class: classes, style: style }, innerContent);
        return m(Overlay, __assign(__assign({}, otherAttrs), { content: container }));
    };
    return Drawer;
}());
export { Drawer };
