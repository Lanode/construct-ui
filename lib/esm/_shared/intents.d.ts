export declare const Intent: {
    readonly NONE: "none";
    readonly PRIMARY: "primary";
    readonly NEGATIVE: "negative";
    readonly POSITIVE: "positive";
    readonly WARNING: "warning";
};
export type Intent = typeof Intent[keyof typeof Intent];
