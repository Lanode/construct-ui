"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlGroup = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var ControlGroup = /** @class */ (function () {
    function ControlGroup() {
    }
    ControlGroup.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, htmlAttrs = tslib_1.__rest(attrs, ["class"]);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.CONTROL_GROUP, className) }), children);
    };
    return ControlGroup;
}());
exports.ControlGroup = ControlGroup;
