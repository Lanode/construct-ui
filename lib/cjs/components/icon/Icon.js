"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var generated_1 = require("./generated");
var Icon = /** @class */ (function () {
    function Icon() {
    }
    Icon.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, intent = attrs.intent, name = attrs.name, onclick = attrs.onclick, size = attrs.size, htmlAttrs = tslib_1.__rest(attrs, ["class", "intent", "name", "onclick", "size"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.ICON, "".concat(_shared_1.Classes.ICON, "-").concat(name), intent && "cui-".concat(intent), size && "cui-".concat(size), onclick && _shared_1.Classes.ICON_ACTION, className);
        var svg = mithril_1.default.trust("<svg viewBox='0 0 24 24'>".concat(generated_1.IconContents[name], "</svg>"));
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes, onclick: onclick }), svg);
    };
    return Icon;
}());
exports.Icon = Icon;
