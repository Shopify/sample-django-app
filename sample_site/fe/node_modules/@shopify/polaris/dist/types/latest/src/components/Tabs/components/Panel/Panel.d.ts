import React from 'react';
export interface PanelProps {
    hidden?: boolean;
    id: string;
    tabID: string;
    children?: React.ReactNode;
}
export declare function Panel({ hidden, id, tabID, children }: PanelProps): JSX.Element;
