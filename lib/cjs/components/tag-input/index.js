"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagInput = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var abstract_component_1 = require("../abstract-component");
var TagInput = /** @class */ (function (_super) {
    tslib_1.__extends(TagInput, _super);
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
            (0, _shared_1.safeCall)(_this.attrs.onclick, e);
        };
        _this.handleInputKeyDown = function (e) {
            if (e.which === _shared_1.Keys.ENTER) {
                _this.handleOnAdd(e);
            }
            (0, _shared_1.safeCall)(_this.attrs.inputAttrs.onkeydown, e);
        };
        _this.handleInputFocus = function (e) {
            _this.isActive = true;
            (0, _shared_1.safeCall)(_this.attrs.inputAttrs.onfocus, e);
        };
        _this.handleInputBlur = function (e) {
            var _a = _this.attrs, addOnBlur = _a.addOnBlur, inputAttrs = _a.inputAttrs;
            _this.isActive = false;
            if (addOnBlur) {
                _this.handleOnAdd(e);
            }
            (0, _shared_1.safeCall)(inputAttrs.onblur, e);
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
        var _a = this.attrs, className = _a.class, contentLeft = _a.contentLeft, contentRight = _a.contentRight, disabled = _a.disabled, fluid = _a.fluid, intent = _a.intent, inputAttrs = _a.inputAttrs, size = _a.size, tags = _a.tags, htmlAttrs = tslib_1.__rest(_a, ["class", "contentLeft", "contentRight", "disabled", "fluid", "intent", "inputAttrs", "size", "tags"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.TAG_INPUT, this.isActive && _shared_1.Classes.ACTIVE, disabled && _shared_1.Classes.DISABLED, fluid && _shared_1.Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var input = (0, mithril_1.default)('input', tslib_1.__assign(tslib_1.__assign({ disabled: disabled }, inputAttrs), { onfocus: this.handleInputFocus, onblur: this.handleInputBlur, onkeydown: this.handleInputKeyDown }));
        var content = [
            contentLeft,
            (0, mithril_1.default)(".".concat(_shared_1.Classes.TAG_INPUT_VALUES), tags, input),
            contentRight
        ];
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes, onclick: this.handleContentClick }), content);
    };
    TagInput.prototype.handleOnAdd = function (e) {
        var value = this.inputEl.value;
        if (value) {
            (0, _shared_1.safeCall)(this.attrs.onAdd, this.inputEl.value, e);
            this.inputEl.value = '';
        }
    };
    return TagInput;
}(abstract_component_1.AbstractComponent));
exports.TagInput = TagInput;
