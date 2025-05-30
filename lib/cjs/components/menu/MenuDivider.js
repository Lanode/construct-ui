"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDivider = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var MenuDivider = /** @class */ (function () {
    function MenuDivider() {
    }
    MenuDivider.prototype.view = function () {
        return (0, mithril_1.default)(".".concat(_shared_1.Classes.MENU_DIVIDER));
    };
    return MenuDivider;
}());
exports.MenuDivider = MenuDivider;
