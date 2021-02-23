import React from 'react';
declare type Variation = 'positive' | 'negative' | 'strong' | 'subdued' | 'code';
export interface TextStyleProps {
    /** Give text additional visual meaning */
    variation?: Variation;
    /** The content that should get the intended styling */
    children?: React.ReactNode;
}
export declare function TextStyle({ variation, children }: TextStyleProps): JSX.Element;
export {};
