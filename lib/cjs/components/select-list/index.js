"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectList = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var popover_1 = require("../popover");
var abstract_component_1 = require("../abstract-component");
var spinner_1 = require("../spinner");
var query_list_1 = require("../query-list");
var SelectList = /** @class */ (function (_super) {
    tslib_1.__extends(SelectList, _super);
    function SelectList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queryList = query_list_1.QueryList.ofType();
        _this.activeIndex = 0;
        _this.handleActiveItemChange = function (activeItem, index) {
            _this.activeIndex = index;
            (0, _shared_1.safeCall)(_this.attrs.onActiveItemChange, activeItem, index);
        };
        _this.handleSelect = function (item, e, index) {
            var _a = _this.attrs, onSelect = _a.onSelect, closeOnSelect = _a.closeOnSelect;
            if (closeOnSelect) {
                _this.isOpen = false;
            }
            (0, _shared_1.safeCall)(onSelect, item, e, index);
        };
        _this.handlePopoverInteraction = function (nextOpenState, e) {
            var _a = _this.attrs.popoverAttrs, isOpen = _a.isOpen, onInteraction = _a.onInteraction;
            if (isOpen != null) {
                (0, _shared_1.safeCall)(onInteraction, nextOpenState, e);
            }
            else
                _this.isOpen = nextOpenState;
        };
        return _this;
    }
    SelectList.ofType = function () {
        return SelectList;
    };
    SelectList.prototype.getDefaultAttrs = function () {
        return {
            closeOnSelect: true,
            popoverAttrs: {},
            inputAttrs: {}
        };
    };
    SelectList.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        var _a = vnode.attrs.popoverAttrs, isOpen = _a.isOpen, defaultIsOpen = _a.defaultIsOpen;
        this.isOpen = isOpen != null ? isOpen : defaultIsOpen != null ? defaultIsOpen : false;
    };
    SelectList.prototype.onbeforeupdate = function (vnode, old) {
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
    SelectList.prototype.view = function () {
        var _a = this.attrs, className = _a.class, popoverAttrs = _a.popoverAttrs, header = _a.header, footer = _a.footer, trigger = _a.trigger, closeOnSelect = _a.closeOnSelect, loading = _a.loading, queryListAttrs = tslib_1.__rest(_a, ["class", "popoverAttrs", "header", "footer", "trigger", "closeOnSelect", "loading"]);
        var queryList = (0, mithril_1.default)(this.queryList, tslib_1.__assign(tslib_1.__assign({ activeIndex: this.activeIndex, onActiveItemChange: this.handleActiveItemChange }, queryListAttrs), { inputAttrs: tslib_1.__assign(tslib_1.__assign({}, queryListAttrs.inputAttrs), { autofocus: true }), onSelect: this.handleSelect }));
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
        return (0, mithril_1.default)(popover_1.Popover, tslib_1.__assign(tslib_1.__assign({ autofocus: true, position: 'bottom-start', closeOnEscapeKey: false }, popoverAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.SELECT_LIST, className, popoverAttrs.class), isOpen: this.isOpen, content: content, onInteraction: this.handlePopoverInteraction, trigger: trigger }));
    };
    return SelectList;
}(abstract_component_1.AbstractComponent));
exports.SelectList = SelectList;
