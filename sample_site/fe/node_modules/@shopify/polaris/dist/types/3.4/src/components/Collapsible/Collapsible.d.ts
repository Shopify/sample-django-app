import React from 'react';
interface Transition {
    /** Assign a transition duration to the collapsible animation. */
    duration?: string;
    /** Assign a transition timing function to the collapsible animation */
    timingFunction?: string;
}
export interface CollapsibleProps {
    /** Assign a unique ID to the collapsible. For accessibility, pass this ID as the value of the triggering component’s aria-controls prop. */
    id: string;
    /** Option to show collapsible content when printing */
    expandOnPrint?: boolean;
    /** Toggle whether the collapsible is expanded or not. */
    open: boolean;
    /** Assign transition properties to the collapsible */
    transition?: Transition;
    /** The content to display inside the collapsible. */
    children?: React.ReactNode;
}
export declare function Collapsible({ id, expandOnPrint, open, transition, children, }: CollapsibleProps): JSX.Element;
export {};
