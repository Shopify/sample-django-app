import React from 'react';
export interface SectionProps {
    children?: React.ReactNode;
    flush?: boolean;
    subdued?: boolean;
}
export declare function Section({ children, flush, subdued, }: SectionProps): JSX.Element;
