import { __assign } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Transition } from 'mithril-transition-group';
import { Classes } from '../../_shared';
var Collapse = /** @class */ (function () {
    function Collapse() {
        var _this = this;
        this.height = 0;
        this.containerStyles = {
            height: 0,
            overflow: 'hidden',
            transition: ''
        };
        this.handleEnter = function (node) {
            var body = node.querySelector(".".concat(Classes.COLLAPSE_BODY));
            _this.contentEl = body.children[0];
            _this.height = _this.getContentHeight(_this.contentEl);
            body.style.transform = "translateY(".concat(-_this.height, "px)");
        };
        this.handleExit = function (node) {
            node.style.height = "".concat(_this.height, "px");
        };
    }
    Collapse.prototype.oninit = function (_a) {
        var attrs = _a.attrs;
        this.duration = attrs.duration || 300;
        this.containerStyles.transition = "height ".concat(this.duration, "ms ease-out");
    };
    Collapse.prototype.onbeforeupdate = function () {
        if (this.contentEl) {
            this.height = this.getContentHeight(this.contentEl);
        }
    };
    Collapse.prototype.view = function (_a) {
        var _this = this;
        var attrs = _a.attrs, children = _a.children;
        var classes = classnames(Classes.COLLAPSE, attrs.class);
        return m(Transition, {
            isVisible: attrs.isOpen,
            onEnter: this.handleEnter,
            onExit: this.handleExit,
            content: function (state) {
                var containerTransitionStyles = {
                    entering: {
                        height: _this.height + 'px'
                    },
                    entered: {
                        height: 'auto',
                        transition: 'none'
                    },
                    exiting: {
                        height: '0px'
                    }
                };
                var bodyTransitionStyles = {
                    entering: {
                        transform: 'translateY(0px)',
                        transition: "transform ".concat(_this.duration, "ms ease-out")
                    },
                    exiting: {
                        transform: "translateY(".concat(-_this.height, "px)"),
                        transition: "transform ".concat(_this.duration, "ms ease-out")
                    }
                };
                var body = m('', {
                    class: Classes.COLLAPSE_BODY,
                    style: __assign({}, bodyTransitionStyles[state])
                }, children);
                var container = m('', {
                    class: classes,
                    style: __assign(__assign(__assign({}, _this.containerStyles), containerTransitionStyles[state]), attrs.style)
                }, body);
                return container;
            },
            timeout: this.duration
        });
    };
    Collapse.prototype.getContentHeight = function (element) {
        if (!element)
            return 0;
        var styles = window.getComputedStyle(element);
        var margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        return Math.ceil(element.offsetHeight + margin);
    };
    return Collapse;
}());
export { Collapse };
