export declare const Breakpoints: {
    readonly xs: "(max-width: 575.98px)";
    readonly sm: "(min-width: 576px) and (max-width: 767.98px)";
    readonly md: "(min-width: 768px) and (max-width: 991.98px)";
    readonly lg: "(min-width: 992px) and (max-width: 1199.98px)";
    readonly xl: "(min-width: 1200px)";
};
export type Breakpoint = keyof typeof Breakpoints;
