import { __assign, __extends, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { AbstractComponent } from '../abstract-component';
import { Classes, safeCall, Keys } from '../../_shared';
import { SelectList } from '../select-list';
import { ListItem } from '../list';
import { Button } from '../button';
import { Icons } from '../icon';
var CustomSelect = /** @class */ (function (_super) {
    __extends(CustomSelect, _super);
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
            return m(ListItem, __assign(__assign({}, attrs), { selected: isSelected, label: label }));
        };
        _this.handleSelect = function (item) {
            if (!('value' in _this.attrs)) {
                _this.selected = item;
            }
            safeCall(_this.attrs.onSelect, item);
            _this.isOpen = false;
        };
        _this.handleActiveItemChange = function (_activeItem, index) {
            _this.activeIndex = index;
        };
        _this.handleTriggerKeyDown = function (e) {
            var key = e.which;
            if (key === Keys.ARROW_UP || key === Keys.ARROW_DOWN) {
                e.preventDefault();
                var options = _this.attrs.options;
                var index = _this.attrs.options.indexOf(_this.selected);
                var direction = key === Keys.ARROW_UP ? 'up' : 'down';
                var nextIndex = getNextIndex(index, options, direction);
                _this.selected = options[nextIndex];
                _this.activeIndex = nextIndex;
            }
            if (key === Keys.SPACE) {
                _this.isOpen = true;
            }
            safeCall(_this.attrs.triggerAttrs.onkeydown, e);
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
        var _a = this.attrs, options = _a.options, className = _a.class, name = _a.name, triggerAttrs = _a.triggerAttrs, size = _a.size, htmlAttrs = __rest(_a, ["options", "class", "name", "triggerAttrs", "size"]);
        var classes = classnames(Classes.CUSTOM_SELECT, className);
        var hiddenContainer = m(".".concat(Classes.CUSTOM_SELECT_HIDDEN), [
            m('input', {
                class: Classes.CUSTOM_SELECT_INPUT,
                value: this.selectedValue,
                name: name
            })
        ]);
        var trigger = m(Button, __assign(__assign({ class: Classes.CUSTOM_SELECT_TRIGGER, compact: true, label: [
                hiddenContainer,
                this.selectedLabel
            ], iconRight: Icons.CHEVRON_DOWN, size: size }, triggerAttrs), { onkeydown: this.handleTriggerKeyDown }));
        var selectList = m(SelectList, {
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
        return m('', __assign({ class: classes }, htmlAttrs), selectList);
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
}(AbstractComponent));
export { CustomSelect };
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
