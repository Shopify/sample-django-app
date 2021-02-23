import React from 'react';
export interface TrapFocusProps {
    trapping?: boolean;
    children?: React.ReactNode;
}
export declare function TrapFocus({ trapping, children }: TrapFocusProps): JSX.Element;
