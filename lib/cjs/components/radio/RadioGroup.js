"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Radio_1 = require("./Radio");
var instanceCounter = 0;
var RadioGroup = /** @class */ (function () {
    function RadioGroup() {
        this.uniqueId = "".concat(_shared_1.Classes.RADIO_GROUP, "-").concat(instanceCounter++);
    }
    RadioGroup.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var className = attrs.class, disabled = attrs.disabled, intent = attrs.intent, name = attrs.name, options = attrs.options, onchange = attrs.onchange, size = attrs.size, value = attrs.value, htmlAttrs = tslib_1.__rest(attrs, ["class", "disabled", "intent", "name", "options", "onchange", "size", "value"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.RADIO_GROUP, size && "cui-".concat(size), className);
        var radioButtons = attrs.options
            .map(function (option) { return _this.renderRadioButton(option, attrs); });
        return (0, mithril_1.default)('', tslib_1.__assign({ class: classes }, htmlAttrs), radioButtons);
    };
    RadioGroup.prototype.renderRadioButton = function (option, attrs) {
        var label = typeof (option) === 'object' ? option.label : option;
        var value = typeof (option) === 'object' ? option.value : option;
        return (0, mithril_1.default)(Radio_1.Radio, {
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
exports.RadioGroup = RadioGroup;
