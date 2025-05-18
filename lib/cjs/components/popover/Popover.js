"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var popper_js_1 = tslib_1.__importDefault(require("popper.js"));
var _shared_1 = require("../../_shared");
var abstract_component_1 = require("../abstract-component");
var overlay_1 = require("../overlay");
var Popover = /** @class */ (function (_super) {
    tslib_1.__extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOpened = function (contentEl) {
            if (!_this.popper && contentEl) {
                var popoverEl = contentEl.querySelector(".".concat(_shared_1.Classes.POPOVER));
                _this.createPopper(popoverEl);
                (0, _shared_1.safeCall)(_this.attrs.onOpened, contentEl);
            }
        };
        _this.handleClosed = function () {
            _this.destroyPopper();
            (0, _shared_1.safeCall)(_this.attrs.onClosed);
        };
        _this.handleOverlayClose = function (e) {
            var target = e.target;
            var isTriggerClick = (0, _shared_1.elementIsOrContains)(_this.trigger.dom, target);
            if (!isTriggerClick || e instanceof KeyboardEvent) {
                _this.isControlled ? _this.handleInteraction(e) : _this.isOpen = false;
            }
        };
        _this.handlePopoverClick = function (e) {
            var target = e.target;
            var hasDimiss = (0, _shared_1.getClosest)(target, ".".concat(_shared_1.Classes.POPOVER_DISSMISS)) != null;
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
                        mithril_1.default.redraw();
                    }, hoverOpenDelay);
                }
                else {
                    _this.isOpen = true;
                    mithril_1.default.redraw();
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
                        mithril_1.default.redraw();
                    }, hoverCloseDelay);
                }
                else {
                    _this.isOpen = false;
                    mithril_1.default.redraw();
                }
            }
            e.redraw = false;
        };
        _this.getContentOffset = function (data, containerEl) {
            if (!_this.attrs.hasArrow) {
                return data;
            }
            var placement = data.placement;
            var isHorizontal = placement.includes('left') || placement.includes('right');
            var position = isHorizontal ? 'left' : 'top';
            var arrowSize = containerEl.children[0].clientHeight + 1;
            var offset = placement.includes('top') || placement.includes('left') ? -arrowSize : arrowSize;
            data.offsets.popper[position] += offset;
            return data;
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
            triggerActiveClass: _shared_1.Classes.ACTIVE
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
            this.popper.options.placement = this.attrs.position;
            this.popper.scheduleUpdate();
        }
    };
    Popover.prototype.onremove = function () {
        this.destroyPopper();
    };
    Popover.prototype.view = function () {
        var _a = this.attrs, className = _a.class, style = _a.style, content = _a.content, hasArrow = _a.hasArrow, trigger = _a.trigger, interactionType = _a.interactionType, inline = _a.inline, backdropClass = _a.backdropClass, overlayClass = _a.overlayClass, overlayStyle = _a.overlayStyle;
        this.trigger = trigger;
        this.setTriggerAttrs();
        var innerContent = (0, mithril_1.default)('', {
            class: (0, classnames_1.default)(_shared_1.Classes.POPOVER, className),
            onclick: this.handlePopoverClick,
            onmouseenter: this.handleTriggerMouseEnter,
            onmouseleave: this.handleTriggerMouseLeave,
            style: style
        }, [
            hasArrow && (0, mithril_1.default)(".".concat(_shared_1.Classes.POPOVER_ARROW)),
            (0, mithril_1.default)(".".concat(_shared_1.Classes.POPOVER_CONTENT), content)
        ]);
        return mithril_1.default.fragment({}, [
            this.trigger,
            (0, mithril_1.default)(overlay_1.Overlay, tslib_1.__assign(tslib_1.__assign({ restoreFocus: this.isClickInteraction() }, this.attrs), { backdropClass: (0, classnames_1.default)(_shared_1.Classes.POPOVER_BACKDROP, backdropClass), class: overlayClass, closeOnOutsideClick: interactionType !== 'click-trigger', content: innerContent, inline: inline, isOpen: this.isOpen, onClose: this.handleOverlayClose, onOpened: this.handleOpened, onClosed: this.handleClosed, style: overlayStyle }))
        ]);
    };
    Popover.prototype.createPopper = function (el) {
        var _this = this;
        var _a = this.attrs, position = _a.position, hasArrow = _a.hasArrow, boundariesEl = _a.boundariesEl, modifiers = _a.modifiers;
        var options = {
            placement: position,
            modifiers: tslib_1.__assign({ arrow: {
                    enabled: hasArrow,
                    element: ".".concat(_shared_1.Classes.POPOVER_ARROW)
                }, offset: {
                    enabled: hasArrow,
                    fn: function (data) { return _this.getContentOffset(data, el); }
                }, preventOverflow: {
                    enabled: true,
                    boundariesElement: boundariesEl,
                    padding: 0
                } }, modifiers)
        };
        this.popper = new popper_js_1.default(this.trigger.dom, el, options);
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
            triggerAttrs.class = (0, classnames_1.default)(triggerAttrs.className || triggerAttrs.class, this.attrs.triggerActiveClass, _shared_1.Classes.POPOVER_TRIGGER_ACTIVE);
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
                (0, _shared_1.safeCall)(triggerEvents.onclick);
            };
        }
        else {
            triggerAttrs.onmouseenter = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerMouseEnter(e);
                (0, _shared_1.safeCall)(triggerEvents.onmouseenter);
            };
            triggerAttrs.onmouseleave = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerMouseLeave(e);
                (0, _shared_1.safeCall)(triggerEvents.onmouseleave);
            };
            triggerAttrs.onfocus = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerFocus(e);
                (0, _shared_1.safeCall)(triggerEvents.onfocus);
            };
            triggerAttrs.onblur = function (e) {
                isControlled ? _this.handleInteraction(e) : _this.handleTriggerBlur(e);
                (0, _shared_1.safeCall)(triggerEvents.onblur);
            };
        }
    };
    Popover.prototype.handleInteraction = function (e) {
        (0, _shared_1.safeCall)(this.attrs.onInteraction, !this.isOpen, e);
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
}(abstract_component_1.AbstractComponent));
exports.Popover = Popover;
