"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var icon_1 = require("../icon");
var Tag = /** @class */ (function () {
    function Tag() {
    }
    Tag.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, label = attrs.label, intent = attrs.intent, size = attrs.size, rounded = attrs.rounded, onRemove = attrs.onRemove, htmlAttrs = tslib_1.__rest(attrs, ["class", "label", "intent", "size", "rounded", "onRemove"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.TAG, intent && "cui-".concat(intent), rounded && _shared_1.Classes.ROUNDED, onRemove && _shared_1.Classes.TAG_REMOVABLE, size && "cui-".concat(size), className);
        var content = [
            label,
            onRemove && (0, mithril_1.default)(icon_1.Icon, {
                name: icon_1.Icons.X,
                onclick: onRemove
            })
        ];
        return (0, mithril_1.default)('span', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), content);
    };
    return Tag;
}());
exports.Tag = Tag;
