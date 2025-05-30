"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var icon_1 = require("../icon");
var TreeNode = /** @class */ (function () {
    function TreeNode() {
    }
    TreeNode.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, className = attrs.class, children = attrs.children, hasCaret = attrs.hasCaret, isExpanded = attrs.isExpanded, isSelected = attrs.isSelected, label = attrs.label, onClick = attrs.onClick, onCollapse = attrs.onCollapse, onExpand = attrs.onExpand, htmlAttrs = tslib_1.__rest(attrs, ["contentLeft", "contentRight", "class", "children", "hasCaret", "isExpanded", "isSelected", "label", "onClick", "onCollapse", "onExpand"]);
        var caretClasses = (0, classnames_1.default)(_shared_1.Classes.TREE_NODE_CARET, !hasCaret && _shared_1.Classes.TREE_NODE_CARET_NONE, hasCaret && (isExpanded ? _shared_1.Classes.TREE_NODE_CARET_OPEN : _shared_1.Classes.TREE_NODE_CARET_CLOSED));
        var caret = (0, mithril_1.default)(icon_1.Icon, {
            class: caretClasses,
            name: icon_1.Icons.CHEVRON_RIGHT,
            onclick: function (e) { return _this.handleCaretClick(e, attrs); }
        });
        var innerContent = [
            caret,
            contentLeft && (0, mithril_1.default)('', { class: _shared_1.Classes.TREE_NODE_CONTENT_LEFT }, contentLeft),
            label && (0, mithril_1.default)('', { class: _shared_1.Classes.TREE_NODE_LABEL }, label),
            contentRight && (0, mithril_1.default)('', { class: _shared_1.Classes.TREE_NODE_CONTENT_RIGHT }, contentRight)
        ];
        var content = (0, mithril_1.default)('', {
            class: _shared_1.Classes.TREE_NODE_CONTENT,
            onclick: function (e) { return _this.handleClick(e, attrs); }
        }, innerContent);
        var treeNodeClasses = (0, classnames_1.default)(_shared_1.Classes.TREE_NODE, isSelected && _shared_1.Classes.TREE_NODE_SELECTED, isExpanded && _shared_1.Classes.TREE_NODE_EXPANDED, className);
        return (0, mithril_1.default)('li', tslib_1.__assign({ class: treeNodeClasses }, htmlAttrs), [
            content,
            isExpanded && (0, mithril_1.default)('ul', { class: _shared_1.Classes.TREE_NODE_LIST }, children)
        ]);
    };
    TreeNode.prototype.handleCaretClick = function (e, attrs) {
        var onCollapse = attrs.onCollapse, onExpand = attrs.onExpand, isExpanded = attrs.isExpanded;
        if (onCollapse || onExpand) {
            e.stopPropagation();
            (0, _shared_1.safeCall)(isExpanded ? onCollapse : onExpand, attrs, e);
        }
        else
            e.redraw = false;
    };
    TreeNode.prototype.handleClick = function (e, attrs) {
        var onClick = attrs.onClick;
        var el = e.target;
        var isClickOnRightContent = el.closest(".".concat(_shared_1.Classes.TREE_NODE_CONTENT_RIGHT));
        if (onClick && !isClickOnRightContent) {
            (0, _shared_1.safeCall)(onClick, attrs, e);
        }
        else
            e.redraw = false;
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
