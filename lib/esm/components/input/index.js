import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, updateElementGroupPadding } from '../../_shared';
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.oncreate = function (vnode) {
        this.updatePadding(vnode);
    };
    Input.prototype.onupdate = function (vnode) {
        this.updatePadding(vnode);
    };
    Input.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var basic = attrs.basic, className = attrs.class, contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, disabled = attrs.disabled, fluid = attrs.fluid, intent = attrs.intent, size = attrs.size, style = attrs.style, 
        // Prevent lifecycle methods from being passed through
        oninit = attrs.oninit, oncreate = attrs.oncreate, onbeforeupdate = attrs.onbeforeupdate, onupdate = attrs.onupdate, onbeforeremove = attrs.onbeforeremove, onremove = attrs.onremove, htmlAttrs = __rest(attrs, ["basic", "class", "contentLeft", "contentRight", "disabled", "fluid", "intent", "size", "style", "oninit", "oncreate", "onbeforeupdate", "onupdate", "onbeforeremove", "onremove"]);
        var classes = classnames(Classes.INPUT, basic && Classes.BASIC, disabled && Classes.DISABLED, fluid && Classes.FLUID, intent && "cui-".concat(intent), size && "cui-".concat(size), className);
        var input = m('input', __assign({}, htmlAttrs));
        return m('', { class: classes, style: style }, [
            contentLeft,
            input,
            contentRight
        ]);
    };
    Input.prototype.updatePadding = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        var containerEl = dom.querySelector('input');
        updateElementGroupPadding(containerEl, attrs.contentLeft, attrs.contentRight);
    };
    return Input;
}());
export { Input };
