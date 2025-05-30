"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabItem = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var spinner_1 = require("../spinner");
var TabItem = /** @class */ (function () {
    function TabItem() {
    }
    TabItem.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var active = attrs.active, label = attrs.label, loading = attrs.loading, size = attrs.size, className = attrs.class, htmlAttrs = tslib_1.__rest(attrs, ["active", "label", "loading", "size", "class"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.TABS_ITEM, active && _shared_1.Classes.ACTIVE, loading && _shared_1.Classes.LOADING, size && "cui-".concat(size), className);
        var content = [
            loading && (0, mithril_1.default)(spinner_1.Spinner, { active: true, fill: true }),
            label
        ];
        return (0, mithril_1.default)('', tslib_1.__assign({ class: classes }, htmlAttrs), content);
    };
    return TabItem;
}());
exports.TabItem = TabItem;
