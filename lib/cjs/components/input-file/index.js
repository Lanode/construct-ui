"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputFile = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var __1 = require("../..");
var button_1 = require("../button");
var InputFile = /** @class */ (function () {
    function InputFile() {
    }
    InputFile.prototype.oncreate = function (vnode) {
        this.updatePadding(vnode);
    };
    InputFile.prototype.onupdate = function (vnode) {
        this.updatePadding(vnode);
    };
    InputFile.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var className = attrs.class, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, fluid = attrs.fluid, intent = attrs.intent, size = attrs.size, style = attrs.style, text = attrs.text, htmlAttrs = tslib_1.__rest(attrs, ["class", "contentLeft", "contentRight", "fluid", "intent", "size", "style", "text"]);
        var classes = (0, classnames_1.default)(__1.Classes.INPUT_FILE, attrs.disabled && __1.Classes.DISABLED, fluid && __1.Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        this.browseButton = (0, mithril_1.default)(button_1.Button, {
            class: __1.Classes.INPUT_FILE_BUTTON,
            label: 'Browse',
            tabindex: -1
        });
        var contentClasses = (0, classnames_1.default)(__1.Classes.INPUT_FILE_CONTENT, text && __1.Classes.INPUT_FILE_TEXT);
        var content = [
            contentLeft,
            (0, mithril_1.default)('input', tslib_1.__assign(tslib_1.__assign({ class: __1.Classes.HIDDEN }, htmlAttrs), { type: 'file' })),
            (0, mithril_1.default)('', { class: contentClasses }, text || 'Choose a file...'),
            contentRight || this.browseButton
        ];
        return (0, mithril_1.default)('label', {
            class: classes,
            style: style,
            tabindex: 0
        }, content);
    };
    InputFile.prototype.updatePadding = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        var containerEl = dom.querySelector(".".concat(__1.Classes.INPUT_FILE_CONTENT));
        (0, __1.updateElementGroupPadding)(containerEl, attrs.contentLeft, attrs.contentRight || this.browseButton);
    };
    return InputFile;
}());
exports.InputFile = InputFile;
