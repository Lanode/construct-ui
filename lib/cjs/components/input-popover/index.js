"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputPopover = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var abstract_component_1 = require("../abstract-component");
var input_1 = require("../input");
var button_1 = require("../button");
var popover_1 = require("../popover");
var text_area_1 = require("../text-area");
var _shared_1 = require("../../_shared");
var InputPopover = /** @class */ (function (_super) {
    tslib_1.__extends(InputPopover, _super);
    function InputPopover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnKeyDown = function (e) {
            var _a = _this.attrs, type = _a.type, submitOnEnter = _a.submitOnEnter;
            var target = e.target;
            if (e.which === _shared_1.Keys.ENTER && type === 'input' && submitOnEnter) {
                var contentEl = target.closest(".".concat(_shared_1.Classes.INPUT_POPOVER_CONTENT));
                var submitBtnEl = contentEl.querySelector(".".concat(_shared_1.Classes.POPOVER_DISSMISS));
                submitBtnEl.click();
                mithril_1.default.redraw();
            }
            e.redraw = false;
        };
        _this.handleOnSubmit = function (e) {
            var submitButtonAttrs = _this.attrs.submitButtonAttrs;
            _this.attrs.onSubmit(_this.value);
            (0, _shared_1.safeCall)(submitButtonAttrs.onclick, e);
        };
        _this.handleOnOpened = function (content) {
            var _a = _this.attrs, type = _a.type, hightlightOnOpen = _a.hightlightOnOpen, onOpened = _a.onOpened;
            _this.value = _this.attrs.value || '';
            if (hightlightOnOpen) {
                var inputEl_1 = content.querySelector(type);
                requestAnimationFrame(function () { return inputEl_1.select(); });
            }
            (0, _shared_1.safeCall)(onOpened);
        };
        _this.handleOnClosed = function () {
            var onClosed = _this.attrs.onClosed;
            (0, _shared_1.safeCall)(onClosed);
        };
        return _this;
    }
    InputPopover.prototype.getDefaultAttrs = function () {
        return {
            contentAttrs: {},
            inputAttrs: {},
            submitButtonAttrs: {},
            submitButtonLabel: 'Submit',
            type: 'input'
        };
    };
    InputPopover.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        this.value = vnode.attrs.value || '';
    };
    InputPopover.prototype.view = function () {
        var _a = this.attrs, className = _a.class, value = _a.value, header = _a.header, contentAttrs = _a.contentAttrs, footer = _a.footer, inputAttrs = _a.inputAttrs, onSubmit = _a.onSubmit, submitButtonAttrs = _a.submitButtonAttrs, submitButtonLabel = _a.submitButtonLabel, placeholder = _a.placeholder, type = _a.type, popoverAttrs = tslib_1.__rest(_a, ["class", "value", "header", "contentAttrs", "footer", "inputAttrs", "onSubmit", "submitButtonAttrs", "submitButtonLabel", "placeholder", "type"]);
        return (0, mithril_1.default)(popover_1.Popover, tslib_1.__assign(tslib_1.__assign({ class: (0, classnames_1.default)(_shared_1.Classes.INPUT_POPOVER, className), autofocus: true }, popoverAttrs), { content: (0, mithril_1.default)(".".concat(_shared_1.Classes.INPUT_POPOVER_CONTENT), tslib_1.__assign(tslib_1.__assign({}, contentAttrs), { onkeydown: this.handleOnKeyDown }), [
                header,
                this.renderInput(),
                (0, mithril_1.default)(button_1.Button, tslib_1.__assign({ class: _shared_1.Classes.POPOVER_DISSMISS, fluid: true, intent: 'primary', label: submitButtonLabel, onclick: this.handleOnSubmit }, submitButtonAttrs)),
                footer
            ]), onClosed: this.handleOnClosed, onOpened: this.handleOnOpened }));
    };
    InputPopover.prototype.renderInput = function () {
        var _this = this;
        var _a = this.attrs, type = _a.type, inputAttrs = _a.inputAttrs, placeholder = _a.placeholder;
        var component = type === 'textarea' ? text_area_1.TextArea : input_1.Input;
        return (0, mithril_1.default)(component, tslib_1.__assign({ autofocus: true, rows: 5, fluid: true, value: this.value, onkeyup: function (e) { return _this.value = e.target.value; }, placeholder: placeholder }, inputAttrs));
    };
    return InputPopover;
}(abstract_component_1.AbstractComponent));
exports.InputPopover = InputPopover;
