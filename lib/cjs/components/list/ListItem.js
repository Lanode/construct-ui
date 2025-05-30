"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItem = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var ListItem = /** @class */ (function () {
    function ListItem() {
    }
    ListItem.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var active = attrs.active, className = attrs.class, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, disabled = attrs.disabled, selected = attrs.selected, label = attrs.label, onclick = attrs.onclick, htmlAttrs = tslib_1.__rest(attrs, ["active", "class", "contentLeft", "contentRight", "disabled", "selected", "label", "onclick"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.LIST_ITEM, active && _shared_1.Classes.ACTIVE, disabled && _shared_1.Classes.DISABLED, selected && _shared_1.Classes.SELECTED, className);
        var content = [
            contentLeft && (0, mithril_1.default)(".".concat(_shared_1.Classes.LIST_ITEM_CONTENT_LEFT), contentLeft),
            label,
            contentRight && (0, mithril_1.default)(".".concat(_shared_1.Classes.LIST_ITEM_CONTENT_RIGHT), contentRight)
        ];
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes, onclick: function (e) { return _this.handleClick(e, attrs); } }), content);
    };
    ListItem.prototype.handleClick = function (e, attrs) {
        var allowOnContentClick = attrs.allowOnContentClick, onclick = attrs.onclick;
        var el = e.target;
        var isLeftContentClick = el.closest(".".concat(_shared_1.Classes.LIST_ITEM_CONTENT_LEFT));
        var isRightContentClick = el.closest(".".concat(_shared_1.Classes.LIST_ITEM_CONTENT_RIGHT));
        var allowContentClick = allowOnContentClick || (!isLeftContentClick && !isRightContentClick);
        if ((0, _shared_1.isFunction)(onclick) && allowContentClick) {
            (0, _shared_1.safeCall)(onclick, e);
        }
        else
            e.redraw = false;
    };
    return ListItem;
}());
exports.ListItem = ListItem;
