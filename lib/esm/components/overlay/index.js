import { __assign, __extends } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Classes, safeCall, Keys, getScrollbarWidth, hasScrollbar } from '../../_shared';
import { AbstractComponent } from '../abstract-component';
import { Portal } from '../portal';
import { TransitionManager } from '../../utils';
var instanceCounter = 0;
export var Overlay = /** @class */ (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = instanceCounter++;
        _this.shouldRender = false;
        _this.onContainerCreate = function (_a) {
            var dom = _a.dom;
            if (_this.shouldRender) {
                _this.handleOpen(dom);
            }
        };
        _this.onContainerUpdate = function (_a) {
            var dom = _a.dom;
            var isOpen = _this.attrs.isOpen;
            var wasOpen = _this.prevAttrs.isOpen;
            if (isOpen && !wasOpen) {
                _this.handleOpen(dom);
            }
            else if (!isOpen && wasOpen) {
                _this.handleClose();
            }
        };
        _this.handleBackdropMouseDown = function (e) {
            var _a;
            var closeOnOutsideClick = (_a = _this.attrs, _a.closeOnOutsideClick), onClose = _a.onClose;
            if (closeOnOutsideClick) {
                safeCall(onClose, e);
            }
            else
                e.redraw = false;
        };
        _this.handleDocumentMouseDown = function (e) {
            var _a;
            var isOpen = (_a = _this.attrs, _a.isOpen), onClose = _a.onClose, closeOnOutsideClick = _a.closeOnOutsideClick;
            var contentEl = _this.contentEl;
            var isClickOnOverlay = contentEl && contentEl.contains(e.target);
            if (isOpen && closeOnOutsideClick && !isClickOnOverlay && _this.lastOpened) {
                safeCall(onClose, e);
                m.redraw();
            }
        };
        _this.handleKeyDown = function (e) {
            var _a;
            var closeOnEscapeKey = (_a = _this.attrs, _a.closeOnEscapeKey), onClose = _a.onClose;
            if (e.which === Keys.ESCAPE && closeOnEscapeKey && _this.lastOpened) {
                safeCall(onClose, e);
                e.preventDefault();
                m.redraw();
            }
        };
        return _this;
    }
    Overlay.prototype.getDefaultAttrs = function () {
        return {
            closeOnEscapeKey: true,
            closeOnOutsideClick: true,
            hasBackdrop: true,
            addToStack: true,
            transitionName: 'fade',
            transitionDuration: TransitionManager.isEnabled ? 200 : 0
        };
    };
    Overlay.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        this.shouldRender = !!vnode.attrs.isOpen;
    };
    Overlay.prototype.onbeforeupdate = function (vnode, old) {
        var _a;
        var _this = this;
        _super.prototype.onbeforeupdate.call(this, vnode, old);
        var isOpen = (_a = vnode.attrs, _a.isOpen), transitionDuration = _a.transitionDuration;
        var wasOpen = old.attrs.isOpen;
        if (isOpen && !wasOpen) {
            this.clearTimeouts();
            this.shouldRender = true;
        }
        else if (!isOpen && wasOpen) {
            if (transitionDuration > 0) {
                this.handleClose();
                this.setTimeout(function () {
                    _this.shouldRender = false;
                    m.redraw();
                    _this.handleClosed();
                }, transitionDuration);
            }
            else {
                this.shouldRender = false;
                this.handleClose();
                this.handleClosed();
            }
        }
    };
    Overlay.prototype.onremove = function () {
        if (this.shouldRender === true) {
            this.handleClose();
            this.handleClosed();
            this.shouldRender = false;
        }
    };
    Overlay.prototype.view = function () {
        var _a;
        var backdropClass = (_a = this.attrs, _a.backdropClass), hasBackdrop = _a.hasBackdrop, content = _a.content, inline = _a.inline, className = _a.class, style = _a.style, portalAttrs = _a.portalAttrs;
        if (!this.shouldRender) {
            return null;
        }
        var innerContent = [
            hasBackdrop && m('', {
                class: classnames(Classes.OVERLAY_BACKDROP, backdropClass),
                onmousedown: this.handleBackdropMouseDown,
                tabindex: 0
            }),
            content
        ];
        var classes = classnames(Classes.OVERLAY, inline && Classes.OVERLAY_INLINE, className);
        var container = m('', {
            class: classes,
            style: style,
            oncreate: this.onContainerCreate,
            onupdate: this.onContainerUpdate
        }, innerContent);
        return inline ? container : m(Portal, __assign({}, portalAttrs), container);
    };
    Overlay.prototype.handleOpen = function (contentEl) {
        var _a;
        var addToStack = (_a = this.attrs, _a.addToStack), closeOnOutsideClick = _a.closeOnOutsideClick, closeOnEscapeKey = _a.closeOnEscapeKey, hasBackdrop = _a.hasBackdrop, onOpened = _a.onOpened, inline = _a.inline;
        this.contentEl = contentEl;
        if (addToStack) {
            Overlay.openStack.push(this.id);
        }
        if (closeOnOutsideClick && !hasBackdrop) {
            document.addEventListener('mousedown', this.handleDocumentMouseDown);
        }
        if (closeOnEscapeKey) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
        this.handleEnterTransition();
        if (hasBackdrop && !inline) {
            document.body.classList.add(Classes.OVERLAY_OPEN);
            var bodyHasScrollbar = hasScrollbar(document.body);
            if (bodyHasScrollbar) {
                document.body.style.paddingRight = "".concat(getScrollbarWidth(), "px");
            }
        }
        safeCall(onOpened, contentEl);
        this.handleFocus();
    };
    Overlay.prototype.handleClose = function () {
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
        document.removeEventListener('keydown', this.handleKeyDown);
        this.handleExitTransition();
    };
    Overlay.prototype.handleClosed = function () {
        var _a;
        var _this = this;
        var restoreFocus = (_a = this.attrs, _a.restoreFocus), onClosed = _a.onClosed, hasBackdrop = _a.hasBackdrop, inline = _a.inline;
        if (this.attrs.addToStack) {
            Overlay.openStack = Overlay.openStack.filter(function (id) { return id !== _this.id; });
        }
        if (this.lastActiveElement && restoreFocus) {
            window.requestAnimationFrame(function () { return _this.lastActiveElement.focus(); });
        }
        if (hasBackdrop && !inline) {
            document.body.classList.remove(Classes.OVERLAY_OPEN);
            document.body.style.paddingRight = '';
        }
        safeCall(onClosed);
    };
    Overlay.prototype.handleEnterTransition = function () {
        var _a;
        var transitionName = (_a = this.attrs, _a.transitionName), transitionDuration = _a.transitionDuration;
        var el = this.contentEl;
        if (el == null || transitionDuration === 0)
            return;
        el.classList.remove("".concat(transitionName, "-exit"));
        el.classList.remove("".concat(transitionName, "-exit-active"));
        el.classList.add("".concat(transitionName, "-enter"));
        el.scrollTop;
        el.classList.add("".concat(transitionName, "-enter-active"));
    };
    Overlay.prototype.handleExitTransition = function () {
        var _a;
        var transitionDuration = (_a = this.attrs, _a.transitionDuration), transitionName = _a.transitionName;
        var el = this.contentEl;
        if (el == null || transitionDuration === 0)
            return;
        el.classList.remove("".concat(transitionName, "-enter"));
        el.classList.remove("".concat(transitionName, "-enter-active"));
        el.classList.add("".concat(transitionName, "-exit"));
        el.scrollTop;
        el.classList.add("".concat(transitionName, "-exit-active"));
    };
    Overlay.prototype.handleFocus = function () {
        var _a;
        this.lastActiveElement = document.activeElement;
        var contentEl = this.contentEl;
        var isOpen = (_a = this.attrs, _a.isOpen), autofocus = _a.autofocus;
        if (!contentEl || !document.activeElement || !isOpen || !autofocus) {
            return;
        }
        window.requestAnimationFrame(function () {
            var isFocusOutsideOverlay = !contentEl.contains(document.activeElement);
            if (isFocusOutsideOverlay) {
                var autofocusEl = contentEl.querySelector('[autofocus]');
                var tabIndexEl = contentEl.querySelector('[tabindex]');
                if (autofocusEl) {
                    autofocusEl.focus();
                }
                else if (tabIndexEl) {
                    tabIndexEl.focus();
                }
            }
        });
    };
    Object.defineProperty(Overlay.prototype, "lastOpened", {
        get: function () {
            return this.attrs.addToStack ? Overlay.getLastOpened() === this.id : true;
        },
        enumerable: false,
        configurable: true
    });
    Overlay.openStack = [];
    Overlay.getLastOpened = function () { return Overlay.openStack[Overlay.openStack.length - 1]; };
    return Overlay;
}(AbstractComponent));
