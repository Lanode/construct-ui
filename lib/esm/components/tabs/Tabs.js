import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
var Tabs = /** @class */ (function () {
    function Tabs() {
    }
    Tabs.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var align = attrs.align, bordered = attrs.bordered, fluid = attrs.fluid, size = attrs.size, classname = attrs.class, htmlAttrs = __rest(attrs, ["align", "bordered", "fluid", "size", "class"]);
        return m('', __assign(__assign({}, htmlAttrs), { class: classnames(Classes.TABS, align && "cui-align-".concat(align), bordered && Classes.TABS_BORDERED, fluid && Classes.FLUID, size && "cui-".concat(size), classname) }), children);
    };
    return Tabs;
}());
export { Tabs };
