import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, Breakpoints } from '../../_shared';
var Col = /** @class */ (function () {
    function Col() {
    }
    Col.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var span = attrs.span, order = attrs.order, offset = attrs.offset, className = attrs.class, htmlAttrs = __rest(attrs, ["span", "order", "offset", "class"]);
        var breakpointClasses = '';
        Object.keys(Breakpoints).map(function (breakpoint) {
            breakpointClasses = classnames(breakpointClasses, typeof span === 'object' && span[breakpoint] && "".concat(Classes.COL, "-").concat(breakpoint, "-").concat(span[breakpoint]), typeof order === 'object' && order[breakpoint] && "".concat(Classes.COL, "-").concat(breakpoint, "-order-").concat(order[breakpoint]), typeof offset === 'object' && offset[breakpoint] && "".concat(Classes.COL, "-").concat(breakpoint, "-offset-").concat(offset[breakpoint]));
        });
        var classes = classnames(breakpointClasses, typeof span === 'number' && "".concat(Classes.COL, "-").concat(span), typeof order === 'number' && "".concat(Classes.COL, "-order-").concat(order), typeof offset === 'number' && "".concat(Classes.COL, "-offset-").concat(offset), className);
        return m('', __assign(__assign({}, htmlAttrs), { class: classes }), children);
    };
    return Col;
}());
export { Col };
