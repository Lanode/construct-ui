import { __assign, __extends, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { AbstractComponent } from '../abstract-component';
import { Classes, safeCall } from '../../_shared';
import { Overlay } from '../overlay';
import { Button } from '../button';
import { Icons } from '../icon';
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleContainerClick = function (e) {
            var _a = _this.attrs, closeOnOutsideClick = _a.closeOnOutsideClick, onClose = _a.onClose;
            var target = e.target;
            var isClickOutsideDialog = target.closest(".".concat(Classes.DIALOG_CONTENT)) == null;
            if (isClickOutsideDialog && closeOnOutsideClick) {
                safeCall(onClose);
            }
            else
                e.redraw = false;
        };
        return _this;
    }
    Dialog.prototype.getDefaultAttrs = function () {
        return {
            hasCloseButton: true,
            closeOnOutsideClick: true
        };
    };
    Dialog.prototype.view = function () {
        var _a = this.attrs, basic = _a.basic, onClose = _a.onClose, hasCloseButton = _a.hasCloseButton, className = _a.class, footer = _a.footer, content = _a.content, style = _a.style, title = _a.title, otherAttrs = __rest(_a, ["basic", "onClose", "hasCloseButton", "class", "footer", "content", "style", "title"]);
        var closeButton = m(Button, {
            class: Classes.DIALOG_CLOSE_BUTTON,
            basic: true,
            iconLeft: Icons.X,
            onclick: onClose ? function (e) { return onClose(e); } : undefined
        });
        var header = m('', { class: Classes.DIALOG_HEADER }, [
            m('h3', title),
            hasCloseButton && closeButton
        ]);
        var innerContent = m('', { class: Classes.DIALOG_CONTENT }, [
            title && header,
            m('', { class: Classes.DIALOG_BODY }, content),
            footer && m('', { class: Classes.DIALOG_FOOTER }, footer)
        ]);
        var container = m('', {
            class: classnames(Classes.DIALOG, basic && Classes.BASIC, className),
            onclick: this.handleContainerClick,
            style: style
        }, innerContent);
        return m(Overlay, __assign(__assign({}, otherAttrs), { onClose: onClose, content: container }));
    };
    return Dialog;
}(AbstractComponent));
export { Dialog };
