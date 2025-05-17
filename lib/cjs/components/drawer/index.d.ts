import m from 'mithril';
import { IOverlayAttrs } from '../overlay';
export declare const DrawerPosition: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly RIGHT: "right";
    readonly LEFT: "left";
};
export type DrawerPosition = typeof DrawerPosition[keyof typeof DrawerPosition];
export interface IDrawerAttrs extends IOverlayAttrs {
    /** Position of drawer */
    position?: DrawerPosition;
}
export declare class Drawer implements m.Component<IDrawerAttrs> {
    view({ attrs }: m.Vnode<IDrawerAttrs>): m.Vnode<IOverlayAttrs, unknown>;
}
