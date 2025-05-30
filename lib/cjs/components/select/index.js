"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var icon_1 = require("../icon");
var Select = /** @class */ (function () {
    function Select() {
    }
    Select.prototype.oncreate = function (vnode) {
        this.updatePadding(vnode);
    };
    Select.prototype.onupdate = function (vnode) {
        this.updatePadding(vnode);
    };
    Select.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var basic = attrs.basic, className = attrs.class, defaultValue = attrs.defaultValue, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, fluid = attrs.fluid, intent = attrs.intent, _b = attrs.options, options = _b === void 0 ? [] : _b, size = attrs.size, style = attrs.style, htmlAttrs = tslib_1.__rest(attrs, ["basic", "class", "defaultValue", "contentLeft", "contentRight", "fluid", "intent", "options", "size", "style"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.SELECT, basic && _shared_1.Classes.BASIC, htmlAttrs.disabled && _shared_1.Classes.DISABLED, fluid && _shared_1.Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var selectOptions = options.map(function (option) { return _this.renderOption(option, attrs); });
        return (0, mithril_1.default)('', { class: classes, style: style }, [
            contentLeft,
            (0, mithril_1.default)('select', tslib_1.__assign({}, htmlAttrs), selectOptions),
            contentRight || (0, mithril_1.default)(icon_1.Icon, { name: icon_1.Icons.CHEVRON_DOWN })
        ]);
    };
    Select.prototype.renderOption = function (option, _a) {
        var defaultValue = _a.defaultValue;
        var label = typeof (option) === 'object' ? option.label : option;
        var value = typeof (option) === 'object' ? option.value : option;
        var attrs = typeof (option) === 'object' ? option : {};
        var selected = defaultValue === value ? true : undefined;
        return (0, mithril_1.default)('option', tslib_1.__assign(tslib_1.__assign({}, attrs), { selected: selected, value: value }), label);
    };
    Select.prototype.updatePadding = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        var containerEl = dom.querySelector('select');
        (0, _shared_1.updateElementGroupPadding)(containerEl, attrs.contentLeft, attrs.contentRight);
    };
    return Select;
}());
exports.Select = Select;
