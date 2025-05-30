import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, safeCall, isFunction } from '../../_shared';
var ListItem = /** @class */ (function () {
    function ListItem() {
    }
    ListItem.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var active = attrs.active, className = attrs.class, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, disabled = attrs.disabled, selected = attrs.selected, label = attrs.label, onclick = attrs.onclick, htmlAttrs = __rest(attrs, ["active", "class", "contentLeft", "contentRight", "disabled", "selected", "label", "onclick"]);
        var classes = classnames(Classes.LIST_ITEM, active && Classes.ACTIVE, disabled && Classes.DISABLED, selected && Classes.SELECTED, className);
        var content = [
            contentLeft && m(".".concat(Classes.LIST_ITEM_CONTENT_LEFT), contentLeft),
            label,
            contentRight && m(".".concat(Classes.LIST_ITEM_CONTENT_RIGHT), contentRight)
        ];
        return m('', __assign(__assign({}, htmlAttrs), { class: classes, onclick: function (e) { return _this.handleClick(e, attrs); } }), content);
    };
    ListItem.prototype.handleClick = function (e, attrs) {
        var allowOnContentClick = attrs.allowOnContentClick, onclick = attrs.onclick;
        var el = e.target;
        var isLeftContentClick = el.closest(".".concat(Classes.LIST_ITEM_CONTENT_LEFT));
        var isRightContentClick = el.closest(".".concat(Classes.LIST_ITEM_CONTENT_RIGHT));
        var allowContentClick = allowOnContentClick || (!isLeftContentClick && !isRightContentClick);
        if (isFunction(onclick) && allowContentClick) {
            safeCall(onclick, e);
        }
        else
            e.redraw = false;
    };
    return ListItem;
}());
export { ListItem };
