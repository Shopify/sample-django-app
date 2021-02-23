import React from 'react';
declare type Spacing = 'extraTight' | 'tight' | 'loose';
export interface ButtonGroupProps {
    /** Determines the space between button group items */
    spacing?: Spacing;
    /** Join buttons as segmented group */
    segmented?: boolean;
    /** Buttons will stretch/shrink to occupy the full width */
    fullWidth?: boolean;
    /** Remove top left and right border radius */
    connectedTop?: boolean;
    /** Button components */
    children?: React.ReactNode;
}
export declare function ButtonGroup({ children, spacing, segmented, fullWidth, connectedTop, }: ButtonGroupProps): JSX.Element;
export {};
