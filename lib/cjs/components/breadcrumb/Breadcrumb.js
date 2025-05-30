"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    Breadcrumb.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, _b = attrs.seperator, seperator = _b === void 0 ? '/' : _b, size = attrs.size, htmlAttrs = tslib_1.__rest(attrs, ["class", "seperator", "size"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.BREADCRUMB, size && "cui-".concat(size), className);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), this.renderChildren(children, attrs));
    };
    Breadcrumb.prototype.renderChildren = function (children, _a) {
        var seperator = _a.seperator;
        return children
            .filter(function (item) { return item != null; })
            .map(function (item) { return [
            item,
            (0, mithril_1.default)("span.".concat(_shared_1.Classes.BREADCRUMB_SEPERATOR), seperator)
        ]; });
    };
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
