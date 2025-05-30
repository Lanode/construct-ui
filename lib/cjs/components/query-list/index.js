"use strict";
// Credits go to Blueprintjs for API structure
// https://github.com/palantir/blueprint/blob/develop/packages/select/src/components/query-list/queryList.tsx
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryList = void 0;
var tslib_1 = require("tslib");
var mithril_1 = tslib_1.__importDefault(require("mithril"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var _shared_1 = require("../../_shared");
var abstract_component_1 = require("../abstract-component");
var icon_1 = require("../icon");
var list_1 = require("../list");
var input_1 = require("../input");
var control_group_1 = require("../control-group");
var QueryList = /** @class */ (function (_super) {
    tslib_1.__extends(QueryList, _super);
    function QueryList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filteredItems = [];
        _this.renderItem = function (item, index) {
            var _a = _this.attrs, itemRender = _a.itemRender, disableArrowKeys = _a.disableArrowKeys, checkmark = _a.checkmark, listAttrs = _a.listAttrs;
            var listItem = itemRender(item, index);
            listItem.attrs = listItem.attrs || {};
            listItem.attrs.onclick = function (e) { return _this.handleSelect(index, listItem.attrs.disabled, e); };
            if (!disableArrowKeys && _this.activeIndex === index) {
                listItem.attrs.class = (0, classnames_1.default)(listItem.attrs.className, listItem.attrs.class, _shared_1.Classes.ACTIVE);
            }
            if (listItem.tag === list_1.ListItem) {
                if (listItem.attrs.selected && checkmark) {
                    listItem.attrs.contentLeft = (0, mithril_1.default)(icon_1.Icon, {
                        name: icon_1.Icons.CHECK,
                        size: listAttrs.size
                    });
                }
            }
            return listItem;
        };
        _this.handleInput = function (e) {
            _this.handleSearchDebounce(e);
            e.redraw = false;
        };
        _this.handleSearchDebounce = (0, lodash_debounce_1.default)(function (e) {
            var value = e.target.value;
            _this.updateQuery(value);
            _this.filteredItems = _this.getFilteredItems();
            _this.updateActiveIndex(0);
            mithril_1.default.redraw();
        }, 200);
        _this.handleInputClear = function () {
            _this.updateQuery('');
            _this.updateActiveIndex(0);
            _this.filteredItems = _this.getFilteredItems();
            _this.scrollToActiveItem();
            if (_this.inputEl) {
                _this.inputEl.focus();
            }
        };
        _this.handleSelect = function (index, isDisabled, e) {
            var onSelect = _this.attrs.onSelect;
            var target = e.target;
            var selectedItem = _this.filteredItems[index];
            var actionsEl = target.closest(".".concat(_shared_1.Classes.LIST_ITEM_CONTENT_RIGHT));
            if (selectedItem != null && !actionsEl && !isDisabled) {
                _this.updateActiveIndex(index);
                (0, _shared_1.safeCall)(onSelect, selectedItem, e, index);
            }
            else
                e.redraw = false;
        };
        _this.handleKeyDown = function (e) {
            var key = e.which;
            switch (key) {
                case _shared_1.Keys.ARROW_UP:
                case _shared_1.Keys.ARROW_DOWN:
                    if (!_this.attrs.disableArrowKeys) {
                        e.preventDefault();
                        _this.moveActiveIndex(key === _shared_1.Keys.ARROW_UP ? 'up' : 'down');
                        mithril_1.default.redraw();
                    }
                    break;
                case _shared_1.Keys.ESCAPE:
                    if (_this.query) {
                        _this.handleInputClear();
                        mithril_1.default.redraw();
                    }
                    break;
                case _shared_1.Keys.ENTER:
                    _this.handleEnterKey(e);
                    mithril_1.default.redraw();
                    break;
                default:
                    break;
            }
            e.redraw = false;
        };
        return _this;
    }
    QueryList.ofType = function () {
        return QueryList;
    };
    QueryList.prototype.getDefaultAttrs = function () {
        return {
            cacheItems: true,
            checkmark: true,
            inputAttrs: {},
            listAttrs: {},
            filterable: true,
            controlGroupAttrs: {},
            emptyContent: 'No items available.'
        };
    };
    QueryList.prototype.oninit = function (vnode) {
        _super.prototype.oninit.call(this, vnode);
        this.query = this.attrs.defaultQuery || '';
        this.activeIndex = this.attrs.defaultActiveIndex || 0;
        this.setControlledAttrs();
        this.filteredItems = this.getFilteredItems();
    };
    QueryList.prototype.oncreate = function (_a) {
        var dom = _a.dom;
        this.listEl = dom.querySelector(".".concat(_shared_1.Classes.LIST));
        this.inputEl = dom.querySelector(".".concat(_shared_1.Classes.INPUT));
        this.scrollToActiveItem();
    };
    QueryList.prototype.onbeforeupdate = function (vnode, old) {
        _super.prototype.onbeforeupdate.call(this, vnode, old);
        this.setControlledAttrs();
        if (vnode.attrs.items !== old.attrs.items ||
            vnode.attrs.query !== old.attrs.query ||
            vnode.attrs.activeIndex !== old.attrs.activeIndex ||
            !vnode.attrs.cacheItems) {
            this.filteredItems = this.getFilteredItems();
            this.scrollToActiveItem();
        }
    };
    QueryList.prototype.view = function () {
        var _a = this.attrs, activeIndex = _a.activeIndex, cacheItems = _a.cacheItems, checkmark = _a.checkmark, className = _a.class, controlGroupAttrs = _a.controlGroupAttrs, contentLeft = _a.contentLeft, contentRight = _a.contentRight, defaultActiveIndex = _a.defaultActiveIndex, defaultQuery = _a.defaultQuery, emptyContent = _a.emptyContent, eventCallbacks = _a.eventCallbacks, filterable = _a.filterable, initialContent = _a.initialContent, inputAttrs = _a.inputAttrs, itemPredicate = _a.itemPredicate, itemListPredicate = _a.itemListPredicate, itemListRender = _a.itemListRender, itemRender = _a.itemRender, items = _a.items, listAttrs = _a.listAttrs, onActiveItemChange = _a.onActiveItemChange, onSelect = _a.onSelect, query = _a.query, onQueryChange = _a.onQueryChange, htmlAttrs = tslib_1.__rest(_a, ["activeIndex", "cacheItems", "checkmark", "class", "controlGroupAttrs", "contentLeft", "contentRight", "defaultActiveIndex", "defaultQuery", "emptyContent", "eventCallbacks", "filterable", "initialContent", "inputAttrs", "itemPredicate", "itemListPredicate", "itemListRender", "itemRender", "items", "listAttrs", "onActiveItemChange", "onSelect", "query", "onQueryChange"]);
        var classes = (0, classnames_1.default)(_shared_1.Classes.QUERY_LIST, checkmark && _shared_1.Classes.QUERY_LIST_CHECKMARK, className);
        (0, _shared_1.safeCall)(eventCallbacks, { handleKeyDown: this.handleKeyDown });
        var innerContent = [
            filterable && this.renderControlGroup(),
            this.renderList()
        ];
        return (0, mithril_1.default)('', tslib_1.__assign(tslib_1.__assign({}, htmlAttrs), { class: classes, onkeydown: this.handleKeyDown, tabindex: 0 }), innerContent);
    };
    QueryList.prototype.renderControlGroup = function () {
        var _a = this.attrs, inputAttrs = _a.inputAttrs, controlGroupAttrs = _a.controlGroupAttrs, contentLeft = _a.contentLeft, contentRight = _a.contentRight;
        return (0, mithril_1.default)(control_group_1.ControlGroup, tslib_1.__assign(tslib_1.__assign({}, this.attrs.controlGroupAttrs), { class: (0, classnames_1.default)(_shared_1.Classes.FLUID, controlGroupAttrs.class) }), [
            contentLeft,
            (0, mithril_1.default)(input_1.Input, tslib_1.__assign(tslib_1.__assign({ placeholder: 'Search items...' }, inputAttrs), { oninput: this.handleInput, contentRight: (this.query.length !== 0)
                    ? (0, mithril_1.default)(icon_1.Icon, {
                        name: icon_1.Icons.X,
                        onclick: this.handleInputClear
                    })
                    : inputAttrs.contentRight, value: this.query })),
            contentRight
        ]);
    };
    QueryList.prototype.renderList = function () {
        var _a = this.attrs, listAttrs = _a.listAttrs, emptyContent = _a.emptyContent, initialContent = _a.initialContent;
        this.itemNodes = this.filteredItems.map(this.renderItem);
        var isEmpty = this.filteredItems.length === 0;
        var hasInitialContent = initialContent && this.query === '';
        var classes = (0, classnames_1.default)(isEmpty && _shared_1.Classes.QUERY_LIST_EMPTY, hasInitialContent && _shared_1.Classes.QUERY_LIST_INITIAL, listAttrs.class);
        var emptyOrInitialContent = (0, mithril_1.default)(".".concat(_shared_1.Classes.QUERY_LIST_MESSAGE), (hasInitialContent && !isEmpty) && initialContent, isEmpty && emptyContent);
        var content = (hasInitialContent || isEmpty)
            ? emptyOrInitialContent
            : this.itemNodes;
        return (0, mithril_1.default)(list_1.List, tslib_1.__assign(tslib_1.__assign({}, listAttrs), { class: classes }), content);
    };
    QueryList.prototype.setControlledAttrs = function () {
        var _a = this.attrs, activeIndex = _a.activeIndex, query = _a.query;
        if (query != null) {
            this.query = query;
        }
        if (activeIndex != null) {
            this.activeIndex = activeIndex === -1 ? 0 : activeIndex;
        }
    };
    QueryList.prototype.scrollToActiveItem = function () {
        var _a = this, listEl = _a.listEl, activeIndex = _a.activeIndex;
        if (listEl && activeIndex >= 0) {
            var activeEl = listEl.children[activeIndex];
            if (!activeEl)
                return;
            var activeTop = activeEl.offsetTop, activeHeight = activeEl.offsetHeight;
            var listScrollTop = listEl.scrollTop, listHeight = listEl.clientHeight;
            var activeBottomEdge = activeTop + activeHeight;
            var activeTopEdge = activeTop;
            if (activeBottomEdge >= listScrollTop + listHeight) {
                listEl.scrollTop = activeBottomEdge + activeHeight - listHeight;
            }
            else if (activeTopEdge <= listScrollTop) {
                listEl.scrollTop = activeTopEdge - activeHeight;
            }
        }
    };
    Object.defineProperty(QueryList.prototype, "activeItem", {
        get: function () {
            return this.filteredItems[this.activeIndex];
        },
        enumerable: false,
        configurable: true
    });
    QueryList.prototype.updateQuery = function (text) {
        var _a = this.attrs, query = _a.query, onQueryChange = _a.onQueryChange;
        if (query != null) {
            (0, _shared_1.safeCall)(onQueryChange, text);
        }
        else
            this.query = text;
    };
    QueryList.prototype.moveActiveIndex = function (direction) {
        var activeIndex = this.activeIndex;
        var index = getNextIndex(activeIndex, this.itemNodes, direction);
        this.updateActiveIndex(index);
        this.scrollToActiveItem();
    };
    QueryList.prototype.updateActiveIndex = function (index) {
        var _a = this.attrs, activeIndex = _a.activeIndex, onActiveItemChange = _a.onActiveItemChange;
        var currentIndex = index > this.filteredItems.length ? 0 : index;
        if (activeIndex != null) {
            (0, _shared_1.safeCall)(onActiveItemChange, this.activeItem, currentIndex);
        }
        else
            this.activeIndex = currentIndex;
    };
    QueryList.prototype.handleEnterKey = function (e) {
        var item = this.activeItem;
        if (item != null) {
            (0, _shared_1.safeCall)(this.attrs.onSelect, item, e);
        }
    };
    QueryList.prototype.getFilteredItems = function () {
        var _this = this;
        var _a = this.attrs, items = _a.items, itemPredicate = _a.itemPredicate, itemListPredicate = _a.itemListPredicate;
        if ((0, _shared_1.isFunction)(itemListPredicate)) {
            return itemListPredicate(this.query, items);
        }
        if ((0, _shared_1.isFunction)(itemPredicate)) {
            return items.filter(function (item, index) { return itemPredicate(_this.query, item, index); });
        }
        return items;
    };
    return QueryList;
}(abstract_component_1.AbstractComponent));
exports.QueryList = QueryList;
function getNextIndex(currentIndex, vnodes, direction) {
    var maxIndex = vnodes.length - 1;
    var index = currentIndex;
    var flag = true;
    if (index < 0 || maxIndex <= 0) {
        return 0;
    }
    while (flag) {
        index = direction === 'up'
            ? index === 0 ? maxIndex : index - 1
            : index === maxIndex ? 0 : index + 1;
        var vnode = vnodes[index];
        var attrs = vnode && vnode.attrs;
        if (attrs && !attrs.disabled) {
            flag = false;
        }
    }
    return index;
}
