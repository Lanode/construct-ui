import { __assign, __extends, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { AbstractComponent } from '../abstract-component';
import { Input } from '../input';
import { Button } from '../button';
import { Popover } from '../popover';
import { TextArea } from '../text-area';
import { Classes, safeCall, Keys } from '../../_shared';
var InputPopover = /** @class */ (function (_super) {
    __extends(InputPopover, _super);
    function InputPopover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnKeyDown = function (e) {
            var _a = _this.attrs, type = _a.type, submitOnEnter = _a.submitOnEnter;
            var target = e.target;
            if (e.which === Keys.ENTER && type === 'input' && submitOnEnter) {
                var contentEl = target.closest(".".concat(Classes.INPUT_POPOVER_CONTENT));
                var submitBtnEl = contentEl.querySelector(".".concat(Classes.POPOVER_DISSMISS));
                submitBtnEl.click();
                m.redraw();
            }
            e.redraw = false;
        };
        _this.handleOnSubmit = function (e) {
            var submitButtonAttrs = _this.attrs.submitButtonAttrs;
            _this.attrs.onSubmit(_this.value);
            safeCall(submitButtonAttrs.onclick, e);
        };
        _this.handleOnOpened = function (content) {
            var _a = _this.attrs, type = _a.type, hightlightOnOpen = _a.hightlightOnOpen, onOpened = _a.onOpened;
            _this.value = _this.attrs.value || '';
            if (hightlightOnOpen) {
                var inputEl_1 = content.querySelector(type);
                requestAnimationFrame(function () { return inputEl_1.select(); });
            }
            safeCall(onOpened);
        };
        _this.handleOnClosed = function () {
            var onClosed = _this.attrs.onClosed;
            safeCall(onClosed);
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
        var _a = this.attrs, className = _a.class, value = _a.value, header = _a.header, contentAttrs = _a.contentAttrs, footer = _a.footer, inputAttrs = _a.inputAttrs, onSubmit = _a.onSubmit, submitButtonAttrs = _a.submitButtonAttrs, submitButtonLabel = _a.submitButtonLabel, placeholder = _a.placeholder, type = _a.type, popoverAttrs = __rest(_a, ["class", "value", "header", "contentAttrs", "footer", "inputAttrs", "onSubmit", "submitButtonAttrs", "submitButtonLabel", "placeholder", "type"]);
        return m(Popover, __assign(__assign({ class: classnames(Classes.INPUT_POPOVER, className), autofocus: true }, popoverAttrs), { content: m(".".concat(Classes.INPUT_POPOVER_CONTENT), __assign(__assign({}, contentAttrs), { onkeydown: this.handleOnKeyDown }), [
                header,
                this.renderInput(),
                m(Button, __assign({ class: Classes.POPOVER_DISSMISS, fluid: true, intent: 'primary', label: submitButtonLabel, onclick: this.handleOnSubmit }, submitButtonAttrs)),
                footer
            ]), onClosed: this.handleOnClosed, onOpened: this.handleOnOpened }));
    };
    InputPopover.prototype.renderInput = function () {
        var _this = this;
        var _a = this.attrs, type = _a.type, inputAttrs = _a.inputAttrs, placeholder = _a.placeholder;
        var component = type === 'textarea' ? TextArea : Input;
        return m(component, __assign({ autofocus: true, rows: 5, fluid: true, value: this.value, onkeyup: function (e) { return _this.value = e.target.value; }, placeholder: placeholder }, inputAttrs));
    };
    return InputPopover;
}(AbstractComponent));
export { InputPopover };
