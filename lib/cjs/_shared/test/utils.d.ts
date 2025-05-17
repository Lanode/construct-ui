export declare const TIMEOUT = 70;
export declare function hasClass(el: HTMLElement, className: string): boolean;
export declare function hasChildClass(el: HTMLElement, className: string): Element | null;
export declare function triggerEvent(el: Element, type: string): Promise<void>;
export declare function keyboardEvent(el: HTMLElement, key: number): Promise<void>;
export declare const sleep: (milliseconds?: number) => Promise<unknown>;
