import React from 'react';
export interface SectionProps {
    children?: React.ReactNode;
    secondary?: boolean;
    fullWidth?: boolean;
    oneHalf?: boolean;
    oneThird?: boolean;
}
export declare function Section({ children, secondary, fullWidth, oneHalf, oneThird, }: SectionProps): JSX.Element;
