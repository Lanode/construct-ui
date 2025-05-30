"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var icon_1 = require("../icon");
var spinner_1 = require("../spinner");
var _shared_1 = require("../../_shared");
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var _b = attrs.align, align = _b === void 0 ? 'center' : _b, active = attrs.active, basic = attrs.basic, compact = attrs.compact, className = attrs.class, disabled = attrs.disabled, fluid = attrs.fluid, href = attrs.href, iconLeft = attrs.iconLeft, iconLeftAttrs = attrs.iconLeftAttrs, iconRight = attrs.iconRight, iconRightAttrs = attrs.iconRightAttrs, intent = attrs.intent, loading = attrs.loading, label = attrs.label, onclick = attrs.onclick, outlined = attrs.outlined, rounded = attrs.rounded, size = attrs.size, sublabel = attrs.sublabel, htmlAttrs = tslib_1.__rest(attrs, ["align", "active", "basic", "compact", "class", "disabled", "fluid", "href", "iconLeft", "iconLeftAttrs", "iconRight", "iconRightAttrs", "intent", "loading", "label", "onclick", "outlined", "rounded", "size", "sublabel"]);
        var tag = href ? 'a' : 'button';
        var isAnchor = tag === 'a';
        var classes = (0, classnames_1.default)(_shared_1.Classes.BUTTON, align && "".concat(_shared_1.Classes.ALIGN, "-").concat(align), active && _shared_1.Classes.ACTIVE, compact && _shared_1.Classes.COMPACT, disabled && _shared_1.Classes.DISABLED, fluid && _shared_1.Classes.FLUID, loading && _shared_1.Classes.LOADING, size && "cui-".concat(size), intent && "cui-".concat(intent), rounded && _shared_1.Classes.ROUNDED, basic && _shared_1.Classes.BASIC, outlined && _shared_1.Classes.OUTLINED, (0, _shared_1.isNullOrEmpty)(label) && (0, _shared_1.isNullOrEmpty)(sublabel) && (!iconLeft || !iconRight) && _shared_1.Classes.BUTTON_ICON, className);
        var content = [
            loading && (0, mithril_1.default)(spinner_1.Spinner, { active: true, fill: true }),
            iconLeft && (0, mithril_1.default)(icon_1.Icon, tslib_1.__assign({ name: iconLeft }, iconLeftAttrs)),
            !(0, _shared_1.isNullOrEmpty)(sublabel) && (0, mithril_1.default)('span', { class: _shared_1.Classes.BUTTON_SUBLABEL }, sublabel),
            !(0, _shared_1.isNullOrEmpty)(label) && (0, mithril_1.default)('span', { class: _shared_1.Classes.BUTTON_LABEL }, label),
            iconRight && (0, mithril_1.default)(icon_1.Icon, tslib_1.__assign({ name: iconRight }, iconRightAttrs))
        ];
        return (0, mithril_1.default)(tag, tslib_1.__assign(tslib_1.__assign({ type: isAnchor ? undefined : 'button', role: isAnchor ? 'button' : undefined }, htmlAttrs), { class: classes, disabled: disabled, 
            // Undefined attrs are not removed on redraw. See https://github.com/MithrilJS/mithril.js/pull/1865#issuecomment-382990558'
            href: disabled ? undefined : href, onclick: disabled ? undefined : onclick, tabIndex: disabled ? undefined : htmlAttrs.tabIndex }), content);
    };
    return Button;
}());
exports.Button = Button;
