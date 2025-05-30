import m from 'mithril';
import { StrictModifiers } from '@popperjs/core';
import { IAttrs, Style } from '../../_shared';
import { AbstractComponent } from '../abstract-component';
import { IOverlayableAttrs } from '../overlay';
import { PopoverInteraction, PopoverPosition } from './popoverTypes';
export interface IPopoverAttrs extends IOverlayableAttrs, IAttrs {
    /**
     * Set the bounding box.
     * @default 'window'
     */
    boundariesEl?: 'window' | 'scrollParent' | Element;
    /** Close the popover on inner content click */
    closeOnContentClick?: boolean;
    /** Inner content */
    content: m.Children;
    /** Initial open when in uncontrolled mode */
    defaultIsOpen?: boolean;
    /**
     * Toggles arrow visiblity
     * @default true
     */
    hasArrow?: boolean;
    /**
     * Duration of close delay on hover interaction
     * @default 100
     */
    hoverCloseDelay?: number;
    /**
     * Duration of open delay on hover interaction
     * @default 0
     */
    hoverOpenDelay?: number;
    /**
     * Trigger interaction to toggle visiblity
     * @default 'click'
     */
    interactionType?: PopoverInteraction;
    /**
     * Toggles visibility;
     * Specifying this attr will place the Popover in controlled mode
     * and will invoke the `onInteraction` callback for each open/close state change
     */
    isOpen?: boolean;
    /**
     * Options to pass to the PopperJS instance;
     * see <a href="https://popper.js.org/docs/v2/modifiers/">HERE</a> for more details
     */
    modifiers?: StrictModifiers[];
    /**
     * Position relative to trigger element
     * @default 'bottom'
     */
    position?: PopoverPosition;
    /** Callback invoked in controlled mode when a popover action will modify the open state */
    onInteraction?: (nextOpenState: boolean, e: Event) => void;
    /**
     * Toggles visibilty when trigger is keyboard focused;
     * Only works when interactionType is hover or hover-trigger
     */
    openOnTriggerFocus?: boolean;
    /** Overlay HTML container class */
    overlayClass?: string;
    /** Overlay HTML container styles */
    overlayStyle?: Style;
    /** Trigger element */
    trigger: m.Vnode<any, any>;
    /**
     * Class added to trigger element on interaction
     * @default 'cui-active'
     */
    triggerActiveClass?: string;
}
export interface IPopoverTriggerAttrs extends IAttrs {
    onclick?(e: Event): void;
    onmouseenter?(e: MouseEvent): void;
    onmouseleave?(e: MouseEvent): void;
    onfocus?(e: Event): void;
    onblur?(e: Event): void;
    [htmlAttrs: string]: any;
}
export declare class Popover extends AbstractComponent<IPopoverAttrs> {
    private isOpen;
    private popper?;
    private trigger;
    getDefaultAttrs(): IPopoverAttrs;
    oninit(vnode: m.Vnode<IPopoverAttrs>): void;
    onbeforeupdate(vnode: m.Vnode<IPopoverAttrs>, old: m.VnodeDOM<IPopoverAttrs>): void;
    onupdate(): void;
    onremove(): void;
    view(): m.Vnode<any, any>;
    private handleOpened;
    private handleClosed;
    private handleOverlayClose;
    private createPopper;
    private destroyPopper;
    private setTriggerAttrs;
    private handleInteraction;
    private handlePopoverClick;
    private handleTriggerClick;
    private handleTriggerFocus;
    private handleTriggerBlur;
    private handleTriggerMouseEnter;
    private handleTriggerMouseLeave;
    private isHoverInteraction;
    private isClickInteraction;
    private get isControlled();
    private getContentOffset;
}
