"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var base_control_1 = require("../base-control");
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.oncreate = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        this.input = dom.querySelector('input');
        if (attrs.defaultIndeterminate != null) {
            this.input.indeterminate = attrs.defaultIndeterminate;
        }
        this.updateIndeterminate(attrs);
    };
    Checkbox.prototype.onupdate = function (_a) {
        var attrs = _a.attrs, dom = _a.dom;
        this.input = dom.querySelector('input');
        this.updateIndeterminate(attrs);
    };
    Checkbox.prototype.view = function (_a) {
        var attrs = _a.attrs;
        return (0, mithril_1.default)(base_control_1.BaseControl, tslib_1.__assign(tslib_1.__assign({}, attrs), { type: 'checkbox', typeClass: _shared_1.Classes.CHECKBOX }));
    };
    Checkbox.prototype.updateIndeterminate = function (attrs) {
        if (attrs.indeterminate != null) {
            this.input.indeterminate = attrs.indeterminate;
        }
    };
    return Checkbox;
}());
exports.Checkbox = Checkbox;
