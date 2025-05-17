export declare const PopoverInteraction: {
    readonly CLICK: "click";
    readonly CLICK_TRIGGER: "click-trigger";
    readonly HOVER: "hover";
    readonly HOVER_TRIGGER: "hover-trigger";
};
export type PopoverInteraction = typeof PopoverInteraction[keyof typeof PopoverInteraction];
export declare const PopoverPosition: {
    readonly AUTO: "auto";
    readonly AUTO_START: "auto-start";
    readonly AUTO_END: "auto-end";
    readonly TOP: "top";
    readonly TOP_START: "top-start";
    readonly TOP_END: "top-end";
    readonly RIGHT: "right";
    readonly RIGHT_START: "right-start";
    readonly RIGHT_END: "right-end";
    readonly BOTTOM: "bottom";
    readonly BOTTOM_START: "bottom-start";
    readonly BOTTOM_END: "bottom-end";
    readonly LEFT: "left";
    readonly LEFT_START: "left-start";
    readonly LEFT_END: "left-end";
};
export type PopoverPosition = typeof PopoverPosition[keyof typeof PopoverPosition];
