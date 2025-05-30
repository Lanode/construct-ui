"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, bordered = attrs.bordered, interactive = attrs.interactive, striped = attrs.striped, htmlAttrs = tslib_1.__rest(attrs, ["class", "bordered", "interactive", "striped"]);
        return (0, mithril_1.default)('table', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.TABLE, bordered && _shared_1.Classes.TABLE_BORDERED, striped && _shared_1.Classes.TABLE_STRIPED, interactive && _shared_1.Classes.TABLE_INTERACTIVE, className) }), children);
    };
    return Table;
}());
exports.Table = Table;
