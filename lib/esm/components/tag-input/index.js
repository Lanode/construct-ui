import { __assign, __extends, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, safeCall, Keys } from '../../_shared';
import { AbstractComponent } from '../abstract-component';
var TagInput = /** @class */ (function (_super) {
    __extends(TagInput, _super);
    function TagInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleContentClick = function (e) {
            var disabled = _this.attrs.disabled;
            if (disabled) {
                return;
            }
            if (_this.inputEl) {
                _this.inputEl.focus();
            }
            safeCall(_this.attrs.onclick, e);
        };
        _this.handleInputKeyDown = function (e) {
            if (e.which === Keys.ENTER) {
                _this.handleOnAdd(e);
            }
            safeCall(_this.attrs.inputAttrs.onkeydown, e);
        };
        _this.handleInputFocus = function (e) {
            _this.isActive = true;
            safeCall(_this.attrs.inputAttrs.onfocus, e);
        };
        _this.handleInputBlur = function (e) {
            var _a = _this.attrs, addOnBlur = _a.addOnBlur, inputAttrs = _a.inputAttrs;
            _this.isActive = false;
            if (addOnBlur) {
                _this.handleOnAdd(e);
            }
            safeCall(inputAttrs.onblur, e);
        };
        return _this;
    }
    TagInput.prototype.getDefaultAttrs = function () {
        return {
            tags: [],
            inputAttrs: {}
        };
    };
    TagInput.prototype.oncreate = function (_a) {
        var dom = _a.dom;
        this.inputEl = dom.querySelector('input');
    };
    TagInput.prototype.view = function () {
        var _a = this.attrs, className = _a.class, contentLeft = _a.contentLeft, contentRight = _a.contentRight, disabled = _a.disabled, fluid = _a.fluid, intent = _a.intent, inputAttrs = _a.inputAttrs, size = _a.size, tags = _a.tags, htmlAttrs = __rest(_a, ["class", "contentLeft", "contentRight", "disabled", "fluid", "intent", "inputAttrs", "size", "tags"]);
        var classes = classnames(Classes.TAG_INPUT, this.isActive && Classes.ACTIVE, disabled && Classes.DISABLED, fluid && Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var input = m('input', __assign(__assign({ disabled: disabled }, inputAttrs), { onfocus: this.handleInputFocus, onblur: this.handleInputBlur, onkeydown: this.handleInputKeyDown }));
        var content = [
            contentLeft,
            m(".".concat(Classes.TAG_INPUT_VALUES), tags, input),
            contentRight
        ];
        return m('', __assign(__assign({}, htmlAttrs), { class: classes, onclick: this.handleContentClick }), content);
    };
    TagInput.prototype.handleOnAdd = function (e) {
        var value = this.inputEl.value;
        if (value) {
            safeCall(this.attrs.onAdd, this.inputEl.value, e);
            this.inputEl.value = '';
        }
    };
    return TagInput;
}(AbstractComponent));
export { TagInput };
