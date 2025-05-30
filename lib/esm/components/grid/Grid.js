import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, normalizeStyle, getObjectKeys } from '../../_shared';
import { ResponsiveManager } from '../../utils';
ResponsiveManager.initialize();
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var align = attrs.align, className = attrs.class, element = attrs.element, justify = attrs.justify, gutter = attrs.gutter, style = attrs.style, htmlAttrs = __rest(attrs, ["align", "class", "element", "justify", "gutter", "style"]);
        var classes = classnames(Classes.GRID, align && "".concat(Classes.GRID, "-align-").concat(align), justify && "".concat(Classes.GRID, "-justify-").concat(justify), className);
        var breakPointGutter = this.getGutter(attrs);
        var styles = __assign(__assign({}, normalizeStyle(style)), { marginLeft: "-".concat(breakPointGutter / 2, "px"), marginRight: "-".concat(breakPointGutter / 2, "px") });
        return m(element || '', __assign(__assign({}, htmlAttrs), { class: classes, style: styles }), this.renderCols(children, breakPointGutter));
    };
    Grid.prototype.getGutter = function (attrs) {
        var breakPoints = ResponsiveManager.activeBreakpoints;
        if (typeof attrs.gutter === 'object' && breakPoints) {
            var activeBreakpoints = getObjectKeys(breakPoints).filter(function (x) { return breakPoints[x]; });
            var currentBreakpoint = activeBreakpoints[activeBreakpoints.length - 1];
            return attrs.gutter[currentBreakpoint] || 0;
        }
        else
            return attrs.gutter;
    };
    Grid.prototype.renderCols = function (children, gutter) {
        var _this = this;
        return children.map(function (col) {
            if (col == null || col.tag === '#')
                return;
            if (typeof (col) !== 'object')
                return col;
            if (col.tag === '[') {
                return _this.renderCols(col.children, gutter);
            }
            col.attrs = col.attrs || {};
            col.attrs.style = __assign(__assign({}, normalizeStyle(col.attrs.style)), { paddingLeft: "".concat(gutter / 2, "px"), paddingRight: "".concat(gutter / 2, "px") });
            return col;
        });
    };
    return Grid;
}());
export { Grid };
