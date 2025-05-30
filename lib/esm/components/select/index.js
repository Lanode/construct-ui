import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, updateElementGroupPadding } from '../../_shared';
import { Icons, Icon } from '../icon';
var Select = /** @class */ (function () {
    function Select() {
    }
    Select.prototype.oncreate = function (vnode) {
        this.updatePadding(vnode);
    };
    Select.prototype.onupdate = function (vnode) {
        this.updatePadding(vnode);
    };
    Select.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var basic = attrs.basic, className = attrs.class, defaultValue = attrs.defaultValue, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, fluid = attrs.fluid, intent = attrs.intent, _b = attrs.options, options = _b === void 0 ? [] : _b, size = attrs.size, style = attrs.style, htmlAttrs = __rest(attrs, ["basic", "class", "defaultValue", "contentLeft", "contentRight", "fluid", "intent", "options", "size", "style"]);
        var classes = classnames(Classes.SELECT, basic && Classes.BASIC, htmlAttrs.disabled && Classes.DISABLED, fluid && Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var selectOptions = options.map(function (option) { return _this.renderOption(option, attrs); });
        return m('', { class: classes, style: style }, [
            contentLeft,
            m('select', __assign({}, htmlAttrs), selectOptions),
            contentRight || m(Icon, { name: Icons.CHEVRON_DOWN })
        ]);
    };
    Select.prototype.renderOption = function (option, _a) {
        var defaultValue = _a.defaultValue;
        var label = typeof (option) === 'object' ? option.label : option;
        var value = typeof (option) === 'object' ? option.value : option;
        var attrs = typeof (option) === 'object' ? option : {};
        var selected = defaultValue === value ? true : undefined;
        return m('option', __assign(__assign({}, attrs), { selected: selected, value: value }), label);
    };
    Select.prototype.updatePadding = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        var containerEl = dom.querySelector('select');
        updateElementGroupPadding(containerEl, attrs.contentLeft, attrs.contentRight);
    };
    return Select;
}());
export { Select };
