"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var utils_1 = require("../../utils");
utils_1.ResponsiveManager.initialize();
var Grid = /** @class */ (function () {
    function Grid() {
    }
    Grid.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var align = attrs.align, className = attrs.class, element = attrs.element, justify = attrs.justify, gutter = attrs.gutter, style = attrs.style, htmlAttrs = tslib_1.__rest(attrs, ["align", "class", "element", "justify", "gutter", "style"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.GRID, align && "".concat(_shared_1.Classes.GRID, "-align-").concat(align), justify && "".concat(_shared_1.Classes.GRID, "-justify-").concat(justify), className);
        var breakPointGutter = this.getGutter(attrs);
        var styles = tslib_1.__assign(tslib_1.__assign({}, (0, _shared_1.normalizeStyle)(style)), { marginLeft: "-".concat(breakPointGutter / 2, "px"), marginRight: "-".concat(breakPointGutter / 2, "px") });
        return (0, mithril_1.default)(element || '', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes, style: styles }), this.renderCols(children, breakPointGutter));
    };
    Grid.prototype.getGutter = function (attrs) {
        var breakPoints = utils_1.ResponsiveManager.activeBreakpoints;
        if (typeof attrs.gutter === 'object' && breakPoints) {
            var activeBreakpoints = (0, _shared_1.getObjectKeys)(breakPoints).filter(function (x) { return breakPoints[x]; });
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
            col.attrs.style = tslib_1.__assign(tslib_1.__assign({}, (0, _shared_1.normalizeStyle)(col.attrs.style)), { paddingLeft: "".concat(gutter / 2, "px"), paddingRight: "".concat(gutter / 2, "px") });
            return col;
        });
    };
    return Grid;
}());
exports.Grid = Grid;
