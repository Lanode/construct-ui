"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroup = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var FormLabel_1 = require("./FormLabel");
var grid_1 = require("../grid");
var FormGroup = /** @class */ (function () {
    function FormGroup() {
    }
    FormGroup.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, content = attrs.content, disabled = attrs.disabled, label = attrs.label, _b = attrs.span, span = _b === void 0 ? 12 : _b, htmlAttrs = tslib_1.__rest(attrs, ["class", "content", "disabled", "label", "span"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.FORM_GROUP, disabled && _shared_1.Classes.DISABLED, className);
        var innerContent = [
            label && (0, mithril_1.default)(FormLabel_1.FormLabel, label),
            content || children
        ];
        return (0, mithril_1.default)(grid_1.Col, tslib_1.__assign({ class: classes, span: span }, htmlAttrs), innerContent);
    };
    return FormGroup;
}());
exports.FormGroup = FormGroup;
