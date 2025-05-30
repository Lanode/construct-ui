"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var base_control_1 = require("../base-control");
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.view = function (_a) {
        var attrs = _a.attrs;
        return (0, mithril_1.default)(base_control_1.BaseControl, tslib_1.__assign(tslib_1.__assign({}, attrs), { type: 'radio', typeClass: _shared_1.Classes.RADIO }));
    };
    return Radio;
}());
exports.Radio = Radio;
