"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, size = attrs.size, _b = attrs.interactive, interactive = _b === void 0 ? true : _b, htmlAttrs = tslib_1.__rest(attrs, ["class", "size", "interactive"]);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.LIST, interactive && _shared_1.Classes.INTERACTIVE, size && "cui-".concat(size), className) }), children);
    };
    return List;
}());
exports.List = List;
