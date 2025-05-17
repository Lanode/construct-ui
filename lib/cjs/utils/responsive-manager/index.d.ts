import { Breakpoint, Breakpoints } from '../../_shared';
declare class ResponsiveManager {
    /** Key value of active breakpoints */
    activeBreakpoints: Record<Breakpoint, boolean>;
    /** Binds breakpoints */
    initialize(breakpoints?: Record<Breakpoint, string>): void;
    /** Checks if current breakpoint string is active */
    is(key: keyof typeof Breakpoints): boolean;
    /** Unbinds all breakpoints */
    destroy(): void;
}
declare const _default: ResponsiveManager;
export default _default;
