import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, updateElementGroupPadding } from '../..';
import { Button } from '../button';
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
        var className = attrs.class, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, fluid = attrs.fluid, intent = attrs.intent, size = attrs.size, style = attrs.style, text = attrs.text, htmlAttrs = __rest(attrs, ["class", "contentLeft", "contentRight", "fluid", "intent", "size", "style", "text"]);
        var classes = classnames(Classes.INPUT_FILE, attrs.disabled && Classes.DISABLED, fluid && Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        this.browseButton = m(Button, {
            class: Classes.INPUT_FILE_BUTTON,
            label: 'Browse',
            tabindex: -1
        });
        var contentClasses = classnames(Classes.INPUT_FILE_CONTENT, text && Classes.INPUT_FILE_TEXT);
        var content = [
            contentLeft,
            m('input', __assign(__assign({ class: Classes.HIDDEN }, htmlAttrs), { type: 'file' })),
            m('', { class: contentClasses }, text || 'Choose a file...'),
            contentRight || this.browseButton
        ];
        return m('label', {
            class: classes,
            style: style,
            tabindex: 0
        }, content);
    };
    InputFile.prototype.updatePadding = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        var containerEl = dom.querySelector(".".concat(Classes.INPUT_FILE_CONTENT));
        updateElementGroupPadding(containerEl, attrs.contentLeft, attrs.contentRight || this.browseButton);
    };
    return InputFile;
}());
export { InputFile };
