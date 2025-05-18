import { __assign, __rest } from "tslib";
import classnames from 'classnames';
import m from 'mithril';
import { Classes } from '../../_shared';
var Spinner = /** @class */ (function () {
    function Spinner() {
    }
    Spinner.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var active = attrs.active, background = attrs.background, className = attrs.class, fill = attrs.fill, intent = attrs.intent, message = attrs.message, size = attrs.size, otherAttrs = __rest(attrs, ["active", "background", "class", "fill", "intent", "message", "size"]);
        var content = [
            m(".".concat(Classes.SPINNER_CONTENT), [
                m(".".concat(Classes.SPINNER_ICON)),
                message && m(".".concat(Classes.SPINNER_MESSAGE), message)
            ])
        ];
        return m('', __assign(__assign({}, otherAttrs), { class: classnames(Classes.SPINNER, active && Classes.SPINNER_ACTIVE, background && Classes.SPINNER_BG, fill && Classes.SPINNER_FILL, intent && "cui-".concat(attrs.intent), size && "cui-".concat(attrs.size), className) }), content);
    };
    return Spinner;
}());
export { Spinner };
