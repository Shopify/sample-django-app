import React from 'react';
export interface ConnectedProps {
    /** Content to display on the left */
    left?: React.ReactNode;
    /** Content to display on the right */
    right?: React.ReactNode;
    /** Connected content */
    children?: React.ReactNode;
}
export declare function Connected({ children, left, right }: ConnectedProps): JSX.Element;
