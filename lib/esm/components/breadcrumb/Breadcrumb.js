import { __assign, __rest } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Classes } from '../../_shared';
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    Breadcrumb.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, _b = attrs.seperator, seperator = _b === void 0 ? '/' : _b, size = attrs.size, htmlAttrs = __rest(attrs, ["class", "seperator", "size"]);
        var classes = classnames(Classes.BREADCRUMB, size && "cui-".concat(size), className);
        return m('', __assign(__assign({}, htmlAttrs), { class: classes }), this.renderChildren(children, attrs));
    };
    Breadcrumb.prototype.renderChildren = function (children, _a) {
        var seperator = _a.seperator;
        return children
            .filter(function (item) { return item != null; })
            .map(function (item) { return [
            item,
            m("span.".concat(Classes.BREADCRUMB_SEPERATOR), seperator)
        ]; });
    };
    return Breadcrumb;
}());
export { Breadcrumb };
