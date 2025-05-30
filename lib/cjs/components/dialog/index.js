"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var abstract_component_1 = require("../abstract-component");
var _shared_1 = require("../../_shared");
var overlay_1 = require("../overlay");
var button_1 = require("../button");
var icon_1 = require("../icon");
var Dialog = /** @class */ (function (_super) {
    tslib_1.__extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleContainerClick = function (e) {
            var _a = _this.attrs, closeOnOutsideClick = _a.closeOnOutsideClick, onClose = _a.onClose;
            var target = e.target;
            var isClickOutsideDialog = target.closest(".".concat(_shared_1.Classes.DIALOG_CONTENT)) == null;
            if (isClickOutsideDialog && closeOnOutsideClick) {
                (0, _shared_1.safeCall)(onClose);
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
        var _a = this.attrs, basic = _a.basic, onClose = _a.onClose, hasCloseButton = _a.hasCloseButton, className = _a.class, footer = _a.footer, content = _a.content, style = _a.style, title = _a.title, otherAttrs = tslib_1.__rest(_a, ["basic", "onClose", "hasCloseButton", "class", "footer", "content", "style", "title"]);
        var closeButton = (0, mithril_1.default)(button_1.Button, {
            class: _shared_1.Classes.DIALOG_CLOSE_BUTTON,
            basic: true,
            iconLeft: icon_1.Icons.X,
            onclick: onClose ? function (e) { return onClose(e); } : undefined
        });
        var header = (0, mithril_1.default)('', { class: _shared_1.Classes.DIALOG_HEADER }, [
            (0, mithril_1.default)('h3', title),
            hasCloseButton && closeButton
        ]);
        var innerContent = (0, mithril_1.default)('', { class: _shared_1.Classes.DIALOG_CONTENT }, [
            title && header,
            (0, mithril_1.default)('', { class: _shared_1.Classes.DIALOG_BODY }, content),
            footer && (0, mithril_1.default)('', { class: _shared_1.Classes.DIALOG_FOOTER }, footer)
        ]);
        var container = (0, mithril_1.default)('', {
            class: (0, classnames_1.default)(_shared_1.Classes.DIALOG, basic && _shared_1.Classes.BASIC, className),
            onclick: this.handleContainerClick,
            style: style
        }, innerContent);
        return (0, mithril_1.default)(overlay_1.Overlay, tslib_1.__assign(tslib_1.__assign({}, otherAttrs), { onClose: onClose, content: container }));
    };
    return Dialog;
}(abstract_component_1.AbstractComponent));
exports.Dialog = Dialog;
