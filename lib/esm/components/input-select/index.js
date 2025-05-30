import { __assign, __extends, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import { AbstractComponent } from '../abstract-component';
import { QueryList } from '../query-list';
import { Popover } from '../popover';
import { Input } from '../input';
import { Spinner } from '../spinner';
import { safeCall, Classes, Keys } from '../../_shared';
var InputSelect = /** @class */ (function (_super) {
    __extends(InputSelect, _super);
    function InputSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queryList = QueryList.ofType();
        _this.query = '';
        _this.activeIndex = 0;
        _this.handleInput = function (e) {
            _this.handleSearchDebounce(e);
            e.redraw = false;
        };
        _this.handleInputFocus = function (e) {
            _this.isOpen = true;
            safeCall(_this.attrs.inputAttrs.onfocus, e);
        };
        _this.handleInputKeyDown = function (e) {
            if (e.which === Keys.ARROW_DOWN && _this.attrs.openOnDownKey) {
                _this.isOpen = true;
                m.redraw();
            }
            else if (e.which === Keys.TAB || e.which === Keys.ESCAPE) {
                _this.isOpen = false;
                m.redraw();
            }
            if (_this.isOpen) {
                _this.handleQueryListKeyDown(e);
            }
            safeCall(_this.attrs.inputAttrs.onkeydown, e);
            e.redraw = false;
        };
        _this.handleSearchDebounce = debounce(function (e) {
            var value = e.target.value;
            _this.query = value;
            _this.activeIndex = 0;
            safeCall(_this.attrs.inputAttrs.oninput, e);
            m.redraw();
        }, 200);
        _this.handleActiveItemChange = function (activeItem, index) {
            _this.activeIndex = index;
            safeCall(_this.attrs.onActiveItemChange, activeItem, index);
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
            safeCall(onSelect, item, e);
        };
        _this.handlePopoverInteraction = function (nextOpenState, e) {
            var target = e.target;
            var isClickOnInput = target.closest(".".concat(Classes.INPUT));
            if (!isClickOnInput) {
                _this.isOpen = false;
            }
            safeCall(_this.attrs.popoverAttrs, nextOpenState, e);
        };
        _this.handlePopoverClosed = function () {
            _this.query = '';
            safeCall(_this.attrs.popoverAttrs.onClosed);
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
        var _a = this.attrs, className = _a.class, popoverAttrs = _a.popoverAttrs, header = _a.header, footer = _a.footer, closeOnSelect = _a.closeOnSelect, loading = _a.loading, inputAttrs = _a.inputAttrs, value = _a.value, openOnDownKey = _a.openOnDownKey, queryListAttrs = __rest(_a, ["class", "popoverAttrs", "header", "footer", "closeOnSelect", "loading", "inputAttrs", "value", "openOnDownKey"]);
        var queryList = m(this.queryList, __assign(__assign({}, queryListAttrs), { activeIndex: this.activeIndex, onActiveItemChange: this.handleActiveItemChange, eventCallbacks: function (events) {
                return _this.handleQueryListKeyDown = events.handleKeyDown;
            }, filterable: false, query: this.query, onSelect: this.handleSelect }));
        this.input = m(Input, __assign(__assign({}, inputAttrs), { oninput: this.handleInput, onkeydown: this.handleInputKeyDown, value: this.isOpen ? this.query : value, onfocus: this.handleInputFocus, placeholder: this.isOpen ? value : '' }));
        var content = [
            header,
            m(Spinner, {
                active: loading,
                background: true,
                fill: true
            }),
            queryList,
            footer
        ];
        return m(Popover, __assign(__assign({ position: 'bottom-start', closeOnEscapeKey: false }, popoverAttrs), { autofocus: false, restoreFocus: false, closeOnOutsideClick: false, class: classnames(Classes.INPUT_SELECT, className), isOpen: this.isOpen, content: content, onClosed: this.handlePopoverClosed, onInteraction: this.handlePopoverInteraction, trigger: this.input }));
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
}(AbstractComponent));
export { InputSelect };
