import m from 'mithril';
export declare abstract class AbstractComponent<A> implements m.Component<A> {
    protected timeoutStack: number[];
    protected attrs: A;
    protected prevAttrs: A;
    abstract view(vnode: m.Vnode<A>): m.Children | null | void;
    abstract getDefaultAttrs(): A;
    oninit(vnode: m.Vnode<A>): void;
    onbeforeupdate(vnode: m.Vnode<A>, prev: m.VnodeDOM<A>): void;
    private setAttrs;
    private getAttrs;
    protected setTimeout: (callback: () => void, timeout?: number) => () => void;
    protected clearTimeouts: () => void;
}
