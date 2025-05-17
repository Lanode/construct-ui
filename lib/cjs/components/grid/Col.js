"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Col = /** @class */ (function () {
    function Col() {
    }
    Col.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var span = attrs.span, order = attrs.order, offset = attrs.offset, className = attrs.class, htmlAttrs = tslib_1.__rest(attrs, ["span", "order", "offset", "class"]);
        var breakpointClasses = '';
        (0, _shared_1.getObjectKeys)(_shared_1.Breakpoints).map(function (breakpoint) {
            breakpointClasses = (0, classnames_1.default)(breakpointClasses, typeof span === 'object' && span[breakpoint] && "".concat(_shared_1.Classes.COL, "-").concat(breakpoint, "-").concat(span[breakpoint]), typeof order === 'object' && order[breakpoint] && "".concat(_shared_1.Classes.COL, "-").concat(breakpoint, "-order-").concat(order[breakpoint]), typeof offset === 'object' && offset[breakpoint] && "".concat(_shared_1.Classes.COL, "-").concat(breakpoint, "-offset-").concat(offset[breakpoint]));
        });
        var classes = (0, classnames_1.default)(breakpointClasses, typeof span === 'number' && "".concat(_shared_1.Classes.COL, "-").concat(span), typeof order === 'number' && "".concat(_shared_1.Classes.COL, "-order-").concat(order), typeof offset === 'number' && "".concat(_shared_1.Classes.COL, "-offset-").concat(offset), className);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), children);
    };
    return Col;
}());
exports.Col = Col;
