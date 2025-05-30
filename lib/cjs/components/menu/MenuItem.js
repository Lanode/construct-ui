"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var button_1 = require("../button");
var popover_menu_1 = require("../popover-menu");
var icon_1 = require("../icon");
var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    MenuItem.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, submenu = attrs.submenu, closeOnSubmenuClick = attrs.closeOnSubmenuClick, popoverMenuAttrs = attrs.popoverMenuAttrs, buttonAttrs = tslib_1.__rest(attrs, ["class", "submenu", "closeOnSubmenuClick", "popoverMenuAttrs"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.MENU_ITEM, _shared_1.Classes.BASIC, className);
        var button = (0, mithril_1.default)(button_1.Button, tslib_1.__assign(tslib_1.__assign({ align: 'left', compact: true, iconRight: submenu ? icon_1.Icons.CHEVRON_RIGHT : undefined }, buttonAttrs), { class: classes }));
        return submenu ? (0, mithril_1.default)(popover_menu_1.PopoverMenu, tslib_1.__assign(tslib_1.__assign({ hasArrow: false, interactionType: 'hover', openOnTriggerFocus: true, position: 'right-start' }, popoverMenuAttrs), { closeOnContentClick: closeOnSubmenuClick, addToStack: false, content: submenu, inline: true, restoreFocus: false, trigger: button })) : button;
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
