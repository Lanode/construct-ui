import { __assign, __rest } from "tslib";
import m from 'mithril';
import classnames from 'classnames';
import { Classes } from '../../_shared';
import { Spinner } from '../spinner';
var TabItem = /** @class */ (function () {
    function TabItem() {
    }
    TabItem.prototype.view = function (_a) {
        var attrs = _a.attrs;
        var active = attrs.active, label = attrs.label, loading = attrs.loading, size = attrs.size, className = attrs.class, htmlAttrs = __rest(attrs, ["active", "label", "loading", "size", "class"]);
        var classes = classnames(Classes.TABS_ITEM, active && Classes.ACTIVE, loading && Classes.LOADING, size && "cui-".concat(size), className);
        var content = [
            loading && m(Spinner, { active: true, fill: true }),
            label
        ];
        return m('', __assign({ class: classes }, htmlAttrs), content);
    };
    return TabItem;
}());
export { TabItem };
