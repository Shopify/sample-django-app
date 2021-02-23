import React from 'react';
export interface PaneProps {
    /** Fix the pane to the top of the popover */
    fixed?: boolean;
    /** Automatically wrap children in padded sections */
    sectioned?: boolean;
    /** The pane content */
    children?: React.ReactNode;
    /** Callback when the bottom of the popover is reached by mouse or keyboard  */
    onScrolledToBottom?(): void;
}
export declare function Pane({ fixed, sectioned, children, onScrolledToBottom, }: PaneProps): JSX.Element;
