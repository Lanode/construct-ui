"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Tree = /** @class */ (function () {
    function Tree() {
    }
    Tree.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var nodes = attrs.nodes, className = attrs.class, htmlAttrs = tslib_1.__rest(attrs, ["nodes", "class"]);
        var treeClasses = (0, classnames_1.default)(_shared_1.Classes.TREE, className);
        return (0, mithril_1.default)('ul', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: treeClasses }), nodes);
    };
    return Tree;
}());
exports.Tree = Tree;
