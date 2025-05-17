import { __assign, __extends } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { createPopper } from '@popperjs/core';
import { Classes, safeCall, elementIsOrContains } from '../../_shared';
import { AbstractComponent } from '../abstract-component';
import { Overlay } from '../overlay';
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOpened = function (contentEl) {
            if (!_this.popper && contentEl) {
                var popoverEl = contentEl.querySelector(".".concat(Classes.POPOVER));
                _this.createPopper(popoverEl);
                safeCall(_this.attrs.onOpened, contentEl);
            }
        };
        _this.handleClosed = function () {
            _this.destroyPopper();
            safeCall(_this.attrs.onClosed);
        };
        _this.handleOverlayClose = function (e) {
            var target = e.target;
            var isTriggerClick = elementIsOrContains(_this.trigger.dom, target);
            if (!isTriggerClick || e instanceof KeyboardEvent) {
                _this.isControlled ? _this.handleInteraction(e) : _this.isOpen = false;
            }
        };
        _this.handlePopoverClick = function (e) {
            var target = e.target;
            var hasDimiss = target.closest(".".concat(Classes.POPOVER_DISSMISS)) != null;
            if (_this.attrs.closeOnContentClick || hasDimiss) {
                _this.isControlled ? _this.handleInteraction(e) : _this.isOpen = false;
            }
            else
                e.redraw = false;
        };
        _this.handleTriggerMouseEnter = function (e) {
            var _a = _this.attrs, hoverOpenDelay = _a.hoverOpenDelay, interactionType = _a.interactionType;
            if (interactionType !== 'hover-trigger') {
                _this.clearTimeouts();
            }
            if (!_this.isOpen && _this.isHoverInteraction()) {
                if (hoverOpenDelay > 0) {
                    _this.setTimeout(function () {
                        _this.isOpen = true;
                        m.redraw();
                    }, hoverOpenDelay);
                }
                else {
                    _this.isOpen = true;
                    m.redraw();
                }
            }
            e.redraw = false;
        };
        _this.handleTriggerMouseLeave = function (e) {
            var hoverCloseDelay = _this.attrs.hoverCloseDelay;
            _this.clearTimeouts();
            if (_this.isOpen && _this.isHoverInteraction()) {
                if (hoverCloseDelay > 0) {
                    _this.setTimeout(function () {
                        _this.isOpen = false;
                        m.redraw();
                    }, hoverCloseDelay);
                }
                else {
                    _this.isOpen = false;
                    m.redraw();
                }
            }
            e.redraw = false;
        };
        _this.getContentOffset = function (placement, containerEl) {
            var _a;
            if (!_this.attrs.hasArrow || ((_a = _this.popper) === null || _a === void 0 ? void 0 : _a.state.placement) != placement)
                return [0, 0];
            var arrowSize = containerEl.children[0].clientWidth;
            return [0, arrowSize];
        };
        return _this;
    }
    Popover.prototype.getDefaultAttrs = function () {
        return {
            boundariesEl: 'window',
            restoreFocus: false,
            hasBackdrop: false,
            hoverCloseDelay: 100,
            hoverOpenDelay: 0,
            interactionType: 'click',
            position: 'bottom',
            hasArrow: true,
            triggerActiveClass: Classes.ACTIVE
        };
    };
    Popover.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        var _a = this.attrs, isOpen = _a.isOpen, defaultIsOpen = _a.defaultIsOpen;
        this.isOpen = isOpen != null ? isOpen : defaultIsOpen != null ? defaultIsOpen : false;
    };
    Popover.prototype.onbeforeupdate = function (vnode, old) {
        _super.prototype.onbeforeupdate.call(this, vnode, old);
        var isOpen = vnode.attrs.isOpen;
        var wasOpen = old.attrs.isOpen;
        if (isOpen && !wasOpen) {
            this.isOpen = true;
        }
        else if (!isOpen && wasOpen) {
            this.isOpen = false;
        }
    };
    Popover.prototype.onupdate = function () {
        if (this.popper) {
            this.popper.setOptions({
                placement: this.attrs.position
            });
        }
    };
    Popover.prototype.onremove = function () {
        this.destroyPopper();
    };
    Popover.prototype.view = function () {
        var _a = this.attrs, className = _a.class, style = _a.style, content = _a.content, hasArrow = _a.hasArrow, trigger = _a.trigger, interactionType = _a.interactionType, inline = _a.inline, backdropClass = _a.backdropClass, overlayClass = _a.overlayClass, overlayStyle = _a.overlayStyle;
        this.trigger = trigger;
        this.setTriggerAttrs();
        var innerContent = m('', {
            class: classnames(Classes.POPOVER, className),
            onclick: this.handlePopoverClick,
            onmouseenter: this.handleTriggerMouseEnter,
            onmouseleave: this.handleTriggerMouseLeave,
            style: style
        }, [
            hasArrow && m(".".concat(Classes.POPOVER_ARROW)),
            m(".".concat(Classes.POPOVER_CONTENT), content)
        ]);
        return m.fragment({}, [
            this.trigger,
            m(Overlay, __assign(__assign({ restoreFocus: this.isClickInteraction() }, this.attrs), { backdropClass: classnames(Classes.POPOVER_BACKDROP, backdropClass), class: overlayClass, closeOnOutsideClick: interactionType !== 'click-trigger', content: innerContent, inline: inline, isOpen: this.isOpen, onClose: this.handleOverlayClose, onOpened: this.handleOpened, onClosed: this.handleClosed, style: overlayStyle }))
        ]);
    };
    Popover.prototype.createPopper = function (el) {
        var _this = this;
        var _a = this.attrs, position = _a.position, hasArrow = _a.hasArrow, boundariesEl = _a.boundariesEl, _b = _a.modifiers, modifiers = _b === void 0 ? [] : _b;
        var defaultModifiers = [{
                name: 'arrow',
                enabled: hasArrow,
                options: {
                    element: ".".concat(Classes.POPOVER_ARROW),
                    padding: 0
                }
            }, {
                name: 'offset',
                options: {
                    offset: function (_a) {
                        var placement = _a.placement;
                        return _this.getContentOffset(placement, el);
                    }
                }
            }, {
                name: 'preventOverflow',
                enabled: true,
                options: {
                    padding: 0,
                    boundary: typeof boundariesEl === 'string' ? 'clippingParents' : boundariesEl,
                    altBoundary: boundariesEl == 'scrollParent'
                }
            }];
        var combinedModifiers = defaultModifiers
            //.filter(cm => modifiers.some(m => m.name !== cm.name))
            .concat(modifiers);
        this.popper = createPopper(this.trigger.dom, el, {
            placement: position,
            modifiers: combinedModifiers
        });
    };
    Popover.prototype.destroyPopper = function () {
        if (this.popper) {
            this.popper.destroy();
            this.popper = undefined;
        }
    };
    Popover.prototype.setTriggerAttrs = function () {
        var _this = this;
        var isControlled = this.isControlled;
        if (!this.trigger.attrs) {
            this.trigger.attrs = {};
        }
        var triggerAttrs = this.trigger.attrs;
        if (this.isOpen) {
            triggerAttrs.class = classnames(triggerAttrs.className || triggerAttrs.class, this.attrs.triggerActiveClass, Classes.POPOVER_TRIGGER_ACTIVE);
        }
        else
            triggerAttrs.class = triggerAttrs.className || triggerAttrs.class || '';
        var triggerEvents = {
            onmouseenter: triggerAttrs.onmouseenter,
            onmouseleave: triggerAttrs.onmouseleave,
            onfocus: triggerAttrs.onfocus,
            onblur: triggerAttrs.onblur,
            onclick: triggerAttrs.onclick
        };
        if (this.isClickInteraction()) {
            triggerAttrs.onclick = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerClick();
                safeCall(triggerEvents.onclick);
            };
        }
        else {
            triggerAttrs.onmouseenter = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerMouseEnter(e);
                safeCall(triggerEvents.onmouseenter);
            };
            triggerAttrs.onmouseleave = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerMouseLeave(e);
                safeCall(triggerEvents.onmouseleave);
            };
            triggerAttrs.onfocus = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerFocus(e);
                safeCall(triggerEvents.onfocus);
            };
            triggerAttrs.onblur = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerBlur(e);
                safeCall(triggerEvents.onblur);
            };
        }
    };
    Popover.prototype.handleInteraction = function (e) {
        safeCall(this.attrs.onInteraction, !this.isOpen, e);
    };
    Popover.prototype.handleTriggerClick = function () {
        this.isOpen = !this.isOpen;
    };
    Popover.prototype.handleTriggerFocus = function (e) {
        if (this.attrs.openOnTriggerFocus) {
            this.handleTriggerMouseEnter(e);
        }
        else
            e.redraw = false;
    };
    Popover.prototype.handleTriggerBlur = function (e) {
        if (this.attrs.openOnTriggerFocus) {
            this.handleTriggerMouseLeave(e);
        }
        else
            e.redraw = false;
    };
    Popover.prototype.isHoverInteraction = function () {
        var interactionType = this.attrs.interactionType;
        return interactionType === 'hover' || interactionType === 'hover-trigger';
    };
    Popover.prototype.isClickInteraction = function () {
        var interactionType = this.attrs.interactionType;
        return interactionType === 'click' || interactionType === 'click-trigger';
    };
    Object.defineProperty(Popover.prototype, "isControlled", {
        get: function () {
            return this.attrs.isOpen != null;
        },
        enumerable: false,
        configurable: true
    });
    return Popover;
}(AbstractComponent));
export { Popover };
