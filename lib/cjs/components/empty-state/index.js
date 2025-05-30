"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyState = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var icon_1 = require("../icon");
var EmptyState = /** @class */ (function () {
    function EmptyState() {
    }
    EmptyState.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, _b = attrs.fill, fill = _b === void 0 ? true : _b, icon = attrs.icon, header = attrs.header, content = attrs.content, htmlAttrs = tslib_1.__rest(attrs, ["class", "fill", "icon", "header", "content"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.EMPTY_STATE, fill && _shared_1.Classes.EMPTY_STATE_FILL, className);
        var container = [
            icon && (0, mithril_1.default)(".".concat(_shared_1.Classes.EMPTY_STATE_ICON), [
                typeof icon === 'string'
                    ? (0, mithril_1.default)(icon_1.Icon, { name: icon })
                    : icon
            ]),
            header && (0, mithril_1.default)(".".concat(_shared_1.Classes.EMPTY_STATE_HEADER), header),
            content && (0, mithril_1.default)(".".concat(_shared_1.Classes.EMPTY_STATE_CONTENT), content)
        ];
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), container);
    };
    return EmptyState;
}());
exports.EmptyState = EmptyState;
