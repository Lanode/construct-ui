"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSelect = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var abstract_component_1 = require("../abstract-component");
var _shared_1 = require("../../_shared");
var select_list_1 = require("../select-list");
var list_1 = require("../list");
var button_1 = require("../button");
var icon_1 = require("../icon");
var CustomSelect = /** @class */ (function (_super) {
    tslib_1.__extends(CustomSelect, _super);
    function CustomSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeIndex = 0;
        _this.isOpen = false;
        _this.renderItem = function (item, index) {
            var label = typeof (item) === 'object' ? item.label : item;
            var value = typeof (item) === 'object' ? item.value : item;
            var attrs = typeof (item) === 'object' ? item : {};
            var isSelected = _this.selectedValue === value;
            if (_this.attrs.itemRender) {
                return _this.attrs.itemRender(item, isSelected, index);
            }
            return (0, mithril_1.default)(list_1.ListItem, tslib_1.__assign(tslib_1.__assign({}, attrs), { selected: isSelected, label: label }));
        };
        _this.handleSelect = function (item) {
            if (!('value' in _this.attrs)) {
                _this.selected = item;
            }
            (0, _shared_1.safeCall)(_this.attrs.onSelect, item);
            _this.isOpen = false;
        };
        _this.handleActiveItemChange = function (_activeItem, index) {
            _this.activeIndex = index;
        };
        _this.handleTriggerKeyDown = function (e) {
            var key = e.which;
            if (key === _shared_1.Keys.ARROW_UP || key === _shared_1.Keys.ARROW_DOWN) {
                e.preventDefault();
                var options = _this.attrs.options;
                var index = _this.attrs.options.indexOf(_this.selected);
                var direction = key === _shared_1.Keys.ARROW_UP ? 'up' : 'down';
                var nextIndex = getNextIndex(index, options, direction);
                _this.selected = options[nextIndex];
                _this.activeIndex = nextIndex;
            }
            if (key === _shared_1.Keys.SPACE) {
                _this.isOpen = true;
            }
            (0, _shared_1.safeCall)(_this.attrs.triggerAttrs.onkeydown, e);
        };
        _this.handlePopoverInteraction = function (nextOpenState) {
            _this.isOpen = nextOpenState;
        };
        return _this;
    }
    CustomSelect.prototype.getDefaultAttrs = function () {
        return {
            options: [],
            triggerAttrs: {}
        };
    };
    CustomSelect.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        this.setSelected();
    };
    CustomSelect.prototype.onbeforeupdate = function (vnode, old) {
        _super.prototype.onbeforeupdate.call(this, vnode, old);
        if (vnode.attrs.value !== old.attrs.value) {
            this.setSelected();
        }
    };
    CustomSelect.prototype.view = function () {
        var _a = this.attrs, options = _a.options, className = _a.class, name = _a.name, triggerAttrs = _a.triggerAttrs, size = _a.size, htmlAttrs = tslib_1.__rest(_a, ["options", "class", "name", "triggerAttrs", "size"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.CUSTOM_SELECT, className);
        var hiddenContainer = (0, mithril_1.default)(".".concat(_shared_1.Classes.CUSTOM_SELECT_HIDDEN), [
            (0, mithril_1.default)('input', {
                class: _shared_1.Classes.CUSTOM_SELECT_INPUT,
                value: this.selectedValue,
                name: name
            })
        ]);
        var trigger = (0, mithril_1.default)(button_1.Button, tslib_1.__assign(tslib_1.__assign({ class: _shared_1.Classes.CUSTOM_SELECT_TRIGGER, compact: true, label: [
                hiddenContainer,
                this.selectedLabel
            ], iconRight: icon_1.Icons.CHEVRON_DOWN, size: size }, triggerAttrs), { onkeydown: this.handleTriggerKeyDown }));
        var selectList = (0, mithril_1.default)(select_list_1.SelectList, {
            filterable: false,
            items: options,
            checkmark: false,
            itemRender: this.renderItem,
            activeIndex: this.activeIndex,
            closeOnSelect: false,
            onActiveItemChange: this.handleActiveItemChange,
            listAttrs: { size: size },
            popoverAttrs: {
                isOpen: this.isOpen,
                hasArrow: false,
                position: 'bottom',
                inline: true,
                boundariesEl: 'scrollParent',
                transitionDuration: 0,
                closeOnEscapeKey: true,
                onInteraction: this.handlePopoverInteraction
            },
            onSelect: this.handleSelect,
            trigger: trigger
        });
        return (0, mithril_1.default)('', tslib_1.__assign({ class: classes }, htmlAttrs), selectList);
    };
    Object.defineProperty(CustomSelect.prototype, "selectedValue", {
        get: function () {
            var selected = this.selected;
            return selected != null ? typeof selected === 'object' ? selected.value : selected : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomSelect.prototype, "selectedLabel", {
        get: function () {
            var selected = this.selected;
            return selected != null ? typeof selected === 'object' ? selected.label : selected : '';
        },
        enumerable: false,
        configurable: true
    });
    CustomSelect.prototype.setSelected = function () {
        var _a = this.attrs, options = _a.options, value = _a.value, defaultValue = _a.defaultValue;
        if (options.length) {
            var firstOption = options[0];
            var selectedValue_1 = value || defaultValue;
            this.selected = typeof firstOption === 'object'
                ? options.find(function (x) { return x.value === selectedValue_1; })
                : selectedValue_1;
            var index = options.indexOf(this.selected);
            this.activeIndex = index;
        }
    };
    return CustomSelect;
}(abstract_component_1.AbstractComponent));
exports.CustomSelect = CustomSelect;
// TODO: Combine with QueryList getNextIndex
function getNextIndex(currentIndex, options, direction) {
    var maxIndex = options.length - 1;
    var index = currentIndex;
    var flag = true;
    while (flag) {
        index = direction === 'up'
            ? index === 0 ? maxIndex : index - 1
            : index === maxIndex ? 0 : index + 1;
        var option = options[index];
        if (typeof option === 'object' && !option.disabled) {
            flag = false;
        }
    }
    return index;
}
