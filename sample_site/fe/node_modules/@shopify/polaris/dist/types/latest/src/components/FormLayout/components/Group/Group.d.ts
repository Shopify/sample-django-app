import React from 'react';
export interface GroupProps {
    children?: React.ReactNode;
    condensed?: boolean;
    title?: string;
    helpText?: React.ReactNode;
}
export declare function Group({ children, condensed, title, helpText }: GroupProps): JSX.Element;
