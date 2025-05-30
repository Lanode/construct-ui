"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormLabel = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var FormLabel = /** @class */ (function () {
    function FormLabel() {
    }
    FormLabel.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        return (0, mithril_1.default)("label.".concat(_shared_1.Classes.FORM_LABEL), tslib_1.__assign({}, attrs), children);
    };
    return FormLabel;
}());
exports.FormLabel = FormLabel;
