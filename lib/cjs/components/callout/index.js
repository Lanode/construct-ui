"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callout = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var icon_1 = require("../icon");
var Callout = /** @class */ (function () {
    function Callout() {
    }
    Callout.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var content = attrs.content, header = attrs.header, icon = attrs.icon, intent = attrs.intent, onDismiss = attrs.onDismiss, size = attrs.size, htmlAttrs = tslib_1.__rest(attrs, ["content", "header", "icon", "intent", "onDismiss", "size"]);
        var innerContent = [
            onDismiss && (0, mithril_1.default)(icon_1.Icon, {
                class: _shared_1.Classes.CALLOUT_DISMISS_ICON,
                name: icon_1.Icons.X,
                onclick: onDismiss
            }),
            icon && (0, mithril_1.default)(icon_1.Icon, { name: icon }),
            header && (0, mithril_1.default)(".".concat(_shared_1.Classes.CALLOUT_HEADER), header),
            content && (0, mithril_1.default)(".".concat(_shared_1.Classes.CALLOUT_CONTENT), content)
        ];
        var classes = (0, classnames_1.default)(_shared_1.Classes.CALLOUT, icon && _shared_1.Classes.CALLOUT_ICON, intent && "cui-".concat(attrs.intent), size && "cui-".concat(attrs.size), attrs.class);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), innerContent);
    };
    return Callout;
}());
exports.Callout = Callout;
