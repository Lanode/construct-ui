import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { Popover } from '../popover';
import { Menu } from '../menu';
var PopoverMenu = /** @class */ (function () {
    function PopoverMenu() {
    }
    PopoverMenu.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, menuAttrs = attrs.menuAttrs, content = attrs.content, popoverAttrs = __rest(attrs, ["class", "menuAttrs", "content"]);
        return m(Popover, __assign(__assign({}, popoverAttrs), { class: classnames(Classes.POPOVER_MENU, className), content: m(Menu, __assign({}, menuAttrs), content) }));
    };
    return PopoverMenu;
}());
export { PopoverMenu };
