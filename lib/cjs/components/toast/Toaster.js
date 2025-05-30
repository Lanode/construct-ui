"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = exports.ToasterPosition = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var abstract_component_1 = require("../abstract-component");
var Toast_1 = require("./Toast");
var overlay_1 = require("../overlay");
exports.ToasterPosition = {
    TOP: 'top',
    TOP_START: 'top-start',
    TOP_END: 'top-end',
    BOTTOM: 'bottom',
    BOTTOM_START: 'bottom-start',
    BOTTOM_END: 'bottom-end'
};
var Toaster = /** @class */ (function (_super) {
    tslib_1.__extends(Toaster, _super);
    function Toaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toasts = [];
        _this.toastId = 0;
        _this.dismiss = function (key, timedOut) {
            if (timedOut === void 0) { timedOut = false; }
            var index = _this.toasts.findIndex(function (x) { return x.key === key; });
            var toast = _this.toasts[index];
            if (toast) {
                (0, _shared_1.safeCall)(toast.onDismiss, timedOut);
                _this.toasts.splice(index, 1);
            }
            mithril_1.default.redraw();
        };
        return _this;
    }
    Toaster.prototype.getDefaultAttrs = function () {
        return {
            clearOnEscapeKey: true,
            position: 'top'
        };
    };
    Toaster.prototype.view = function () {
        var _this = this;
        var _a = this.attrs, className = _a.class, position = _a.position, inline = _a.inline, toasts = _a.toasts, clearOnEscapeKey = _a.clearOnEscapeKey, style = _a.style;
        var classes = (0, classnames_1.default)(_shared_1.Classes.TOASTER, "".concat(_shared_1.Classes.TOASTER, "-").concat(position), inline && _shared_1.Classes.TOASTER_INLINE, className);
        var renderedToasts = this.isControlled()
            ? toasts || []
            : this.toasts.map(function (toastOptions) { return _this.renderToast(toastOptions); });
        return (0, mithril_1.default)(overlay_1.Overlay, {
            closeOnEscapeKey: clearOnEscapeKey,
            closeOnOutsideClick: false,
            class: classes,
            content: renderedToasts,
            hasBackdrop: false,
            inline: inline,
            isOpen: renderedToasts.length > 0,
            transitionDuration: 0,
            addToStack: false,
            onClose: function () { return _this.clear(); },
            style: style
        });
    };
    Toaster.prototype.onremove = function () {
        this.clear();
    };
    Toaster.prototype.show = function (attrs) {
        var toastOptions = tslib_1.__assign(tslib_1.__assign({}, attrs), { key: "cui-toast-".concat(this.toastId++) });
        this.toasts.push(toastOptions);
        mithril_1.default.redraw();
        return toastOptions.key;
    };
    Toaster.prototype.update = function (key, attrs) {
        var index = this.toasts.findIndex(function (x) { return x.key === key; });
        this.toasts[index] = tslib_1.__assign(tslib_1.__assign({}, this.toasts[index]), attrs);
        mithril_1.default.redraw();
    };
    Toaster.prototype.clear = function () {
        this.toasts.map(function (x) { return (0, _shared_1.safeCall)(x.onDismiss, false); });
        this.toasts.length = 0;
        mithril_1.default.redraw();
    };
    Toaster.prototype.getToasts = function () {
        return this.toasts;
    };
    Toaster.prototype.renderToast = function (attrs) {
        return (0, mithril_1.default)(Toast_1.Toast, tslib_1.__assign(tslib_1.__assign({}, attrs), { onDismiss: this.dismiss }));
    };
    Toaster.prototype.isControlled = function () {
        return this.attrs.toasts != null;
    };
    return Toaster;
}(abstract_component_1.AbstractComponent));
exports.Toaster = Toaster;
