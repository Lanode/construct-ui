import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { Radio } from './Radio';
var instanceCounter = 0;
var RadioGroup = /** @class */ (function () {
    function RadioGroup() {
        this.uniqueId = "".concat(Classes.RADIO_GROUP, "-").concat(instanceCounter++);
    }
    RadioGroup.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var className = attrs.class, disabled = attrs.disabled, intent = attrs.intent, name = attrs.name, options = attrs.options, onchange = attrs.onchange, size = attrs.size, value = attrs.value, htmlAttrs = __rest(attrs, ["class", "disabled", "intent", "name", "options", "onchange", "size", "value"]);
        var classes = classnames(Classes.RADIO_GROUP, size && "cui-".concat(size), className);
        var radioButtons = attrs.options
            .map(function (option) { return _this.renderRadioButton(option, attrs); });
        return m('', __assign({ class: classes }, htmlAttrs), radioButtons);
    };
    RadioGroup.prototype.renderRadioButton = function (option, attrs) {
        var label = typeof (option) === 'object' ? option.label : option;
        var value = typeof (option) === 'object' ? option.value : option;
        return m(Radio, {
            checked: value === attrs.value,
            disabled: attrs.disabled,
            label: label,
            name: attrs.name || this.uniqueId,
            onchange: attrs.onchange,
            value: value
        });
    };
    return RadioGroup;
}());
export { RadioGroup };
