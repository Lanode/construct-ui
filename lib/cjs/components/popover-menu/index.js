"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverMenu = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var popover_1 = require("../popover");
var menu_1 = require("../menu");
var PopoverMenu = /** @class */ (function () {
    function PopoverMenu() {
    }
    PopoverMenu.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, menuAttrs = attrs.menuAttrs, content = attrs.content, popoverAttrs = tslib_1.__rest(attrs, ["class", "menuAttrs", "content"]);
        return (0, mithril_1.default)(popover_1.Popover, tslib_1.__assign(tslib_1.__assign({}, popoverAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.POPOVER_MENU, className), content: (0, mithril_1.default)(menu_1.Menu, tslib_1.__assign({}, menuAttrs), content) }));
    };
    return PopoverMenu;
}());
exports.PopoverMenu = PopoverMenu;
