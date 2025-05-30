import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        var className = attrs.class, size = attrs.size, _b = attrs.interactive, interactive = _b === void 0 ? true : _b, htmlAttrs = __rest(attrs, ["class", "size", "interactive"]);
        return m('', __assign(__assign({}, htmlAttrs), { class: classnames(Classes.LIST, interactive && Classes.INTERACTIVE, size && "cui-".concat(size), className) }), children);
    };
    return List;
}());
export { List };
