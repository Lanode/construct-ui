import m from 'mithril';
import { Classes } from '../../_shared';
var MenuDivider = /** @class */ (function () {
    function MenuDivider() {
    }
    MenuDivider.prototype.view = function () {
        return m(".".concat(Classes.MENU_DIVIDER));
    };
    return MenuDivider;
}());
export { MenuDivider };
