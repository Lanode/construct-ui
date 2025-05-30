import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes, safeCall } from '../../_shared';
import { Icon, Icons } from '../icon';
var TreeNode = /** @class */ (function () {
    function TreeNode() {
    }
    TreeNode.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs;
        var contentLeft = attrs.contentLeft, contentRight = attrs.contentRight, className = attrs.class, children = attrs.children, hasCaret = attrs.hasCaret, isExpanded = attrs.isExpanded, isSelected = attrs.isSelected, label = attrs.label, onClick = attrs.onClick, onCollapse = attrs.onCollapse, onExpand = attrs.onExpand, htmlAttrs = __rest(attrs, ["contentLeft", "contentRight", "class", "children", "hasCaret", "isExpanded", "isSelected", "label", "onClick", "onCollapse", "onExpand"]);
        var caretClasses = classnames(Classes.TREE_NODE_CARET, !hasCaret && Classes.TREE_NODE_CARET_NONE, hasCaret && (isExpanded ? Classes.TREE_NODE_CARET_OPEN : Classes.TREE_NODE_CARET_CLOSED));
        var caret = m(Icon, {
            class: caretClasses,
            name: Icons.CHEVRON_RIGHT,
            onclick: function (e) { return _this.handleCaretClick(e, attrs); }
        });
        var innerContent = [
            caret,
            contentLeft && m('', { class: Classes.TREE_NODE_CONTENT_LEFT }, contentLeft),
            label && m('', { class: Classes.TREE_NODE_LABEL }, label),
            contentRight && m('', { class: Classes.TREE_NODE_CONTENT_RIGHT }, contentRight)
        ];
        var content = m('', {
            class: Classes.TREE_NODE_CONTENT,
            onclick: function (e) { return _this.handleClick(e, attrs); }
        }, innerContent);
        var treeNodeClasses = classnames(Classes.TREE_NODE, isSelected && Classes.TREE_NODE_SELECTED, isExpanded && Classes.TREE_NODE_EXPANDED, className);
        return m('li', __assign({ class: treeNodeClasses }, htmlAttrs), [
            content,
            isExpanded && m('ul', { class: Classes.TREE_NODE_LIST }, children)
        ]);
    };
    TreeNode.prototype.handleCaretClick = function (e, attrs) {
        var onCollapse = attrs.onCollapse, onExpand = attrs.onExpand, isExpanded = attrs.isExpanded;
        if (onCollapse || onExpand) {
            e.stopPropagation();
            safeCall(isExpanded ? onCollapse : onExpand, attrs, e);
        }
        else
            e.redraw = false;
    };
    TreeNode.prototype.handleClick = function (e, attrs) {
        var onClick = attrs.onClick;
        var el = e.target;
        var isClickOnRightContent = el.closest(".".concat(Classes.TREE_NODE_CONTENT_RIGHT));
        if (onClick && !isClickOnRightContent) {
            safeCall(onClick, attrs, e);
        }
        else
            e.redraw = false;
    };
    return TreeNode;
}());
export { TreeNode };
