"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var _shared_1 = require("../../_shared");
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, elevation = attrs.elevation, fluid = attrs.fluid, interactive = attrs.interactive, size = attrs.size, htmlAttrs = tslib_1.__rest(attrs, ["class", "elevation", "fluid", "interactive", "size"]);
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.CARD, elevation && "cui-elevation-".concat(elevation || 1), fluid && _shared_1.Classes.FLUID, interactive && _shared_1.Classes.CARD_INTERACTIVE, size && "cui-".concat(size), className) }), children);
    };
    return Card;
}());
exports.Card = Card;
