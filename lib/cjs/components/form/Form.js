"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var grid_1 = require("../grid");
var Form = /** @class */ (function () {
    function Form() {
    }
    Form.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var classes = (0, classnames_1.default)(_shared_1.Classes.FORM, attrs.class);
        return (0, mithril_1.default)(grid_1.Grid, tslib_1.__assign(tslib_1.__assign({}, attrs), { element: 'form', class: classes }), children);
    };
    return Form;
}());
exports.Form = Form;
