import { __assign, __extends, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, safeCall } from '../../_shared';
import { AbstractComponent } from '../abstract-component';
import { Icon, Icons } from '../icon';
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCloseClick = function () {
            _this.triggerDismiss(false);
        };
        _this.startTimeout = function () {
            var timeout = _this.attrs.timeout;
            if (timeout > 0) {
                _this.setTimeout(function () { return _this.triggerDismiss(true); }, timeout);
            }
        };
        return _this;
    }
    Toast.prototype.getDefaultAttrs = function () {
        return {
            timeout: 3000
        };
    };
    Toast.prototype.oncreate = function () {
        this.startTimeout();
    };
    Toast.prototype.onbeforeupdate = function (vnode, prev) {
        _super.prototype.onbeforeupdate.call(this, vnode, prev);
        if (prev.attrs.timeout <= 0 && vnode.attrs.timeout > 0) {
            this.startTimeout();
        }
        else if (prev.attrs.timeout > 0 && vnode.attrs.timeout <= 0) {
            this.clearTimeouts();
        }
        else if (vnode.attrs.timeout !== prev.attrs.timeout) {
            this.clearTimeouts();
            this.startTimeout();
        }
    };
    Toast.prototype.view = function () {
        var _a = this.attrs, className = _a.class, intent = _a.intent, size = _a.size, icon = _a.icon, message = _a.message, htmlAttrs = __rest(_a, ["class", "intent", "size", "icon", "message"]);
        var classes = classnames(Classes.TOAST, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var content = [
            icon && m(Icon, { name: icon }),
            m(".".concat(Classes.TOAST_MESSAGE), message),
            m(Icon, {
                name: Icons.X,
                onclick: this.handleCloseClick
            })
        ];
        return m('', __assign(__assign({ class: classes, onblur: this.startTimeout, onfocus: this.clearTimeouts, onmouseenter: this.clearTimeouts, onmouseleave: this.startTimeout }, htmlAttrs), { tabindex: 0 }), content);
    };
    Toast.prototype.onremove = function () {
        this.clearTimeouts();
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        safeCall(this.attrs.onDismiss, this.attrs.key, didTimeoutExpire);
        this.clearTimeouts();
        m.redraw();
    };
    return Toast;
}(AbstractComponent));
export { Toast };
