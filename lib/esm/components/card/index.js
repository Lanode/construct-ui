import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, elevation = attrs.elevation, fluid = attrs.fluid, interactive = attrs.interactive, size = attrs.size, htmlAttrs = __rest(attrs, ["class", "elevation", "fluid", "interactive", "size"]);
        return m('', __assign(__assign({}, htmlAttrs), { class: classnames(Classes.CARD, elevation && "cui-elevation-".concat(elevation || 1), fluid && Classes.FLUID, interactive && Classes.CARD_INTERACTIVE, size && "cui-".concat(size), className) }), children);
    };
    return Card;
}());
export { Card };
