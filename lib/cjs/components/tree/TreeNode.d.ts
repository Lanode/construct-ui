import m from 'mithril';
import { IAttrs } from '../../_shared';
export interface ITreeNodeAttrs extends IAttrs {
    key: number | string;
    /** Right-justified content */
    contentRight?: m.Children;
    /** Left-justified content */
    contentLeft?: m.Children;
    /** Array of TreeNodes */
    children?: m.Vnode<ITreeNodeAttrs, unknown>[];
    /** Toggles caret visiblity */
    hasCaret?: boolean;
    /** Wether children are expanded */
    isExpanded?: boolean;
    /** Wether node is selected */
    isSelected?: boolean;
    /** Inner label or children */
    label?: m.Children;
    /** Callback invoked on tree node click */
    onClick?: (node: ITreeNodeAttrs, e: Event) => void;
    /** Callback invoked when caret is collapsed */
    onCollapse?: (node: ITreeNodeAttrs, e: Event) => void;
    /** Callback invoked when caret is expanded */
    onExpand?: (node: ITreeNodeAttrs, e: Event) => void;
    [htmlAttrs: string]: any;
}
export declare class TreeNode implements m.Component<ITreeNodeAttrs> {
    view({ attrs }: m.Vnode<ITreeNodeAttrs>): m.Vnode<any, any>;
    private handleCaretClick;
    private handleClick;
}
