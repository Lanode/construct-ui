"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbItem = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var BreadcrumbItem = /** @class */ (function () {
    function BreadcrumbItem() {
    }
    BreadcrumbItem.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, htmlAttrs = tslib_1.__rest(attrs, ["class"]);
        var tag = htmlAttrs.href != null ? 'a' : 'span';
        var classes = (0, classnames_1.default)(_shared_1.Classes.BREADCRUMB_ITEM, className);
        return (0, mithril_1.default)(tag, tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes }), children);
    };
    return BreadcrumbItem;
}());
exports.BreadcrumbItem = BreadcrumbItem;
