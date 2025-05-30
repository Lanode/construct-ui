"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var _shared_1 = require("../../_shared");
var Spinner = /** @class */ (function () {
    function Spinner() {
    }
    Spinner.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var active = attrs.active, background = attrs.background, className = attrs.class, fill = attrs.fill, intent = attrs.intent, message = attrs.message, size = attrs.size, otherAttrs = tslib_1.__rest(attrs, ["active", "background", "class", "fill", "intent", "message", "size"]);
        var content = [
            (0, mithril_1.default)(".".concat(_shared_1.Classes.SPINNER_CONTENT), [
                (0, mithril_1.default)(".".concat(_shared_1.Classes.SPINNER_ICON)),
                message && (0, mithril_1.default)(".".concat(_shared_1.Classes.SPINNER_MESSAGE), message)
            ])
        ];
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, otherAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.SPINNER, active && _shared_1.Classes.SPINNER_ACTIVE, background && _shared_1.Classes.SPINNER_BG, fill && _shared_1.Classes.SPINNER_FILL, intent && "cui-".concat(attrs.intent), size && "cui-".concat(attrs.size), className) }), content);
    };
    return Spinner;
}());
exports.Spinner = Spinner;
