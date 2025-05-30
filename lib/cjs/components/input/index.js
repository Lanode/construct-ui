"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.oncreate = function (vnode) {
        this.updatePadding(vnode);
    };
    Input.prototype.onupdate = function (vnode) {
        this.updatePadding(vnode);
    };
    Input.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var basic = attrs.basic, className = attrs.class, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, disabled = attrs.disabled, fluid = attrs.fluid, intent = attrs.intent, size = attrs.size, style = attrs.style, 
        // Prevent lifecycle methods from being passed through
        oninit = attrs.oninit, oncreate = attrs.oncreate, onbeforeupdate = attrs.onbeforeupdate, onupdate = attrs.onupdate, onbeforeremove = attrs.onbeforeremove, onremove = attrs.onremove, htmlAttrs = tslib_1.__rest(attrs, ["basic", "class", "contentLeft", "contentRight", "disabled", "fluid", "intent", "size", "style", "oninit", "oncreate", "onbeforeupdate", "onupdate", "onbeforeremove", "onremove"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.INPUT, basic && _shared_1.Classes.BASIC, disabled && _shared_1.Classes.DISABLED, fluid && _shared_1.Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var input = (0, mithril_1.default)('input', tslib_1.__assign({}, htmlAttrs));
        return (0, mithril_1.default)('', { class: classes, style: style }, [
            contentLeft,
            input,
            contentRight
        ]);
    };
    Input.prototype.updatePadding = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        var containerEl = dom.querySelector('input');
        (0, _shared_1.updateElementGroupPadding)(containerEl, attrs.contentLeft, attrs.contentRight);
    };
    return Input;
}());
exports.Input = Input;
