import { __assign, __extends } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, safeCall } from '../../_shared';
import { AbstractComponent } from '../abstract-component';
import { Toast } from './Toast';
import { Overlay } from '../overlay';
export var ToasterPosition = {
    TOP: 'top',
    TOP_START: 'top-start',
    TOP_END: 'top-end',
    BOTTOM: 'bottom',
    BOTTOM_START: 'bottom-start',
    BOTTOM_END: 'bottom-end'
};
var Toaster = /** @class */ (function (_super) {
    __extends(Toaster, _super);
    function Toaster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toasts = [];
        _this.toastId = 0;
        _this.dismiss = function (key, timedOut) {
            if (timedOut === void 0) { timedOut = false; }
            var index = _this.toasts.findIndex(function (x) { return x.key === key; });
            var toast = _this.toasts[index];
            if (toast) {
                safeCall(toast.onDismiss, timedOut);
                _this.toasts.splice(index, 1);
            }
            m.redraw();
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
        var classes = classnames(Classes.TOASTER, "".concat(Classes.TOASTER, "-").concat(position), inline && Classes.TOASTER_INLINE, className);
        var renderedToasts = this.isControlled()
            ? toasts || []
            : this.toasts.map(function (toastOptions) { return _this.renderToast(toastOptions); });
        return m(Overlay, {
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
        var toastOptions = __assign(__assign({}, attrs), { key: "cui-toast-".concat(this.toastId++) });
        this.toasts.push(toastOptions);
        m.redraw();
        return toastOptions.key;
    };
    Toaster.prototype.update = function (key, attrs) {
        var index = this.toasts.findIndex(function (x) { return x.key === key; });
        this.toasts[index] = __assign(__assign({}, this.toasts[index]), attrs);
        m.redraw();
    };
    Toaster.prototype.clear = function () {
        this.toasts.map(function (x) { return safeCall(x.onDismiss, false); });
        this.toasts.length = 0;
        m.redraw();
    };
    Toaster.prototype.getToasts = function () {
        return this.toasts;
    };
    Toaster.prototype.renderToast = function (attrs) {
        return m(Toast, __assign(__assign({}, attrs), { onDismiss: this.dismiss }));
    };
    Toaster.prototype.isControlled = function () {
        return this.attrs.toasts != null;
    };
    return Toaster;
}(AbstractComponent));
export { Toaster };
