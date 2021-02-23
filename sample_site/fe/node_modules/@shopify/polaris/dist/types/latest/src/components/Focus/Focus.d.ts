import React from 'react';
export interface FocusProps {
    children?: React.ReactNode;
    disabled?: boolean;
    root: React.RefObject<HTMLElement> | HTMLElement | null;
}
export declare const Focus: React.NamedExoticComponent<FocusProps>;
