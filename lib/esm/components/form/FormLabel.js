import { __assign } from "tslib";
import m from 'mithril';
import { Classes } from '../../_shared';
var FormLabel = /** @class */ (function () {
    function FormLabel() {
    }
    FormLabel.prototype.view = function (_a) {
        var attrs = _a.attrs, children = _a.children;
        return m("label.".concat(Classes.FORM_LABEL), __assign({}, attrs), children);
    };
    return FormLabel;
}());
export { FormLabel };
