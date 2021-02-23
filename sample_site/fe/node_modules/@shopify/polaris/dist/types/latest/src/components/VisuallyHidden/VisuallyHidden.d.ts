import React from 'react';
export interface VisuallyHiddenProps {
    /** The content to be hidden visually */
    children?: React.ReactNode;
}
export declare function VisuallyHidden({ children }: VisuallyHiddenProps): JSX.Element;
