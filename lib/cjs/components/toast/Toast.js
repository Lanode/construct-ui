"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var abstract_component_1 = require("../abstract-component");
var icon_1 = require("../icon");
var Toast = /** @class */ (function (_super) {
    tslib_1.__extends(Toast, _super);
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
        var _a = this.attrs, className = _a.class, intent = _a.intent, size = _a.size, icon = _a.icon, message = _a.message, htmlAttrs = tslib_1.__rest(_a, ["class", "intent", "size", "icon", "message"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.TOAST, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var content = [
            icon && (0, mithril_1.default)(icon_1.Icon, { name: icon }),
            (0, mithril_1.default)(".".concat(_shared_1.Classes.TOAST_MESSAGE), message),
            (0, mithril_1.default)(icon_1.Icon, {
                name: icon_1.Icons.X,
                onclick: this.handleCloseClick
            })
        ];
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({ class: classes, onblur: this.startTimeout, onfocus: this.clearTimeouts, onmouseenter: this.clearTimeouts, onmouseleave: this.startTimeout }, htmlAttrs), { tabindex: 0 }), content);
    };
    Toast.prototype.onremove = function () {
        this.clearTimeouts();
    };
    Toast.prototype.triggerDismiss = function (didTimeoutExpire) {
        (0, _shared_1.safeCall)(this.attrs.onDismiss, this.attrs.key, didTimeoutExpire);
        this.clearTimeouts();
        mithril_1.default.redraw();
    };
    return Toast;
}(abstract_component_1.AbstractComponent));
exports.Toast = Toast;
