"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputSelect = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var abstract_component_1 = require("../abstract-component");
var query_list_1 = require("../query-list");
var popover_1 = require("../popover");
var input_1 = require("../input");
var spinner_1 = require("../spinner");
var _shared_1 = require("../../_shared");
var InputSelect = /** @class */ (function (_super) {
    tslib_1.__extends(InputSelect, _super);
    function InputSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queryList = query_list_1.QueryList.ofType();
        _this.query = '';
        _this.activeIndex = 0;
        _this.handleInput = function (e) {
            _this.handleSearchDebounce(e);
            e.redraw = false;
        };
        _this.handleInputFocus = function (e) {
            _this.isOpen = true;
            (0, _shared_1.safeCall)(_this.attrs.inputAttrs.onfocus, e);
        };
        _this.handleInputKeyDown = function (e) {
            if (e.which === _shared_1.Keys.ARROW_DOWN && _this.attrs.openOnDownKey) {
                _this.isOpen = true;
                mithril_1.default.redraw();
            }
            else if (e.which === _shared_1.Keys.TAB || e.which === _shared_1.Keys.ESCAPE) {
                _this.isOpen = false;
                mithril_1.default.redraw();
            }
            if (_this.isOpen) {
                _this.handleQueryListKeyDown(e);
            }
            (0, _shared_1.safeCall)(_this.attrs.inputAttrs.onkeydown, e);
            e.redraw = false;
        };
        _this.handleSearchDebounce = (0, lodash_debounce_1.default)(function (e) {
            var value = e.target.value;
            _this.query = value;
            _this.activeIndex = 0;
            (0, _shared_1.safeCall)(_this.attrs.inputAttrs.oninput, e);
            mithril_1.default.redraw();
        }, 200);
        _this.handleActiveItemChange = function (activeItem, index) {
            _this.activeIndex = index;
            (0, _shared_1.safeCall)(_this.attrs.onActiveItemChange, activeItem, index);
        };
        _this.handleSelect = function (item, e) {
            var _a = _this.attrs, onSelect = _a.onSelect, closeOnSelect = _a.closeOnSelect;
            if (closeOnSelect) {
                _this.isOpen = false;
                _this.inputEl.blur();
            }
            else {
                _this.inputEl.focus();
            }
            (0, _shared_1.safeCall)(onSelect, item, e);
        };
        _this.handlePopoverInteraction = function (nextOpenState, e) {
            var target = e.target;
            var isClickOnInput = target.closest(".".concat(_shared_1.Classes.INPUT));
            if (!isClickOnInput) {
                _this.isOpen = false;
            }
            (0, _shared_1.safeCall)(_this.attrs.popoverAttrs, nextOpenState, e);
        };
        _this.handlePopoverClosed = function () {
            _this.query = '';
            (0, _shared_1.safeCall)(_this.attrs.popoverAttrs.onClosed);
        };
        return _this;
    }
    InputSelect.prototype.getDefaultAttrs = function () {
        return {
            closeOnSelect: true,
            popoverAttrs: {},
            inputAttrs: {},
            openOnDownKey: true
        };
    };
    InputSelect.ofType = function () {
        return InputSelect;
    };
    InputSelect.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        var _a = vnode.attrs.popoverAttrs, isOpen = _a.isOpen, defaultIsOpen = _a.defaultIsOpen;
        this.isOpen = isOpen != null ? isOpen : defaultIsOpen != null ? defaultIsOpen : false;
    };
    InputSelect.prototype.onbeforeupdate = function (vnode, old) {
        _super.prototype.onbeforeupdate.call(this, vnode, old);
        var isOpen = vnode.attrs.popoverAttrs.isOpen;
        var wasOpen = old.attrs.popoverAttrs.isOpen;
        if (isOpen && !wasOpen) {
            this.isOpen = true;
        }
        else if (!isOpen && wasOpen) {
            this.isOpen = false;
        }
    };
    InputSelect.prototype.view = function () {
        var _this = this;
        var _a = this.attrs, className = _a.class, popoverAttrs = _a.popoverAttrs, header = _a.header, footer = _a.footer, closeOnSelect = _a.closeOnSelect, loading = _a.loading, inputAttrs = _a.inputAttrs, value = _a.value, openOnDownKey = _a.openOnDownKey, queryListAttrs = tslib_1.__rest(_a, ["class", "popoverAttrs", "header", "footer", "closeOnSelect", "loading", "inputAttrs", "value", "openOnDownKey"]);
        var queryList = (0, mithril_1.default)(this.queryList, tslib_1.__assign(tslib_1.__assign({}, queryListAttrs), { activeIndex: this.activeIndex, onActiveItemChange: this.handleActiveItemChange, eventCallbacks: function (events) {
                return _this.handleQueryListKeyDown = events.handleKeyDown;
            }, filterable: false, query: this.query, onSelect: this.handleSelect }));
        this.input = (0, mithril_1.default)(input_1.Input, tslib_1.__assign(tslib_1.__assign({}, inputAttrs), { oninput: this.handleInput, onkeydown: this.handleInputKeyDown, value: this.isOpen ? this.query : value, onfocus: this.handleInputFocus, placeholder: this.isOpen ? value : '' }));
        var content = [
            header,
            (0, mithril_1.default)(spinner_1.Spinner, {
                active: loading,
                background: true,
                fill: true
            }),
            queryList,
            footer
        ];
        return (0, mithril_1.default)(popover_1.Popover, tslib_1.__assign(tslib_1.__assign({ position: 'bottom-start', closeOnEscapeKey: false }, popoverAttrs), { autofocus: false, restoreFocus: false, closeOnOutsideClick: false, class: (0, classnames_1.default)(_shared_1.Classes.INPUT_SELECT, className), isOpen: this.isOpen, content: content, onClosed: this.handlePopoverClosed, onInteraction: this.handlePopoverInteraction, trigger: this.input }));
    };
    Object.defineProperty(InputSelect.prototype, "inputEl", {
        get: function () {
            return this.input.dom &&
                this.input.dom.querySelector('input');
        },
        enumerable: false,
        configurable: true
    });
    return InputSelect;
}(abstract_component_1.AbstractComponent));
exports.InputSelect = InputSelect;
