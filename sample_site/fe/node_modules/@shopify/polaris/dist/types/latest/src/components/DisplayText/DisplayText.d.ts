import React from 'react';
import type { HeadingTagName } from '../../types';
declare type Size = 'small' | 'medium' | 'large' | 'extraLarge';
export interface DisplayTextProps {
    /**
     * Name of element to use for text
     * @default 'p'
     */
    element?: HeadingTagName;
    /**
     * Size of the text
     * @default 'medium'
     */
    size?: Size;
    /** Content to display */
    children?: React.ReactNode;
}
export declare function DisplayText({ element: Element, children, size, }: DisplayTextProps): JSX.Element;
export {};
