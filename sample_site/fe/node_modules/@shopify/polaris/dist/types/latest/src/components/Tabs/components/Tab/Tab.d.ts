import React from 'react';
export interface TabProps {
    id: string;
    focused?: boolean;
    siblingTabHasFocus?: boolean;
    selected?: boolean;
    panelID?: string;
    children?: React.ReactNode;
    url?: string;
    measuring?: boolean;
    accessibilityLabel?: string;
    onClick?(id: string): void;
}
export declare function Tab({ id, focused, siblingTabHasFocus, children, onClick, selected, url, panelID, measuring, accessibilityLabel, }: TabProps): JSX.Element;
