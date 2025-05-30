"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = exports.DrawerPosition = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var overlay_1 = require("../overlay");
exports.DrawerPosition = {
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
        var position = attrs.position, content = attrs.content, className = attrs.class, style = attrs.style, otherAttrs = tslib_1.__rest(attrs, ["position", "content", "class", "style"]);
        var innerContent = (0, mithril_1.default)(".".concat(_shared_1.Classes.DRAWER_CONTENT), content);
        var classes = (0, classnames_1.default)(_shared_1.Classes.DRAWER, "".concat(_shared_1.Classes.DRAWER, "-").concat(position), className);
        var container = (0, mithril_1.default)('', { class: classes, style: style }, innerContent);
        return (0, mithril_1.default)(overlay_1.Overlay, tslib_1.__assign(tslib_1.__assign({}, otherAttrs), { content: container }));
    };
    return Drawer;
}());
exports.Drawer = Drawer;
