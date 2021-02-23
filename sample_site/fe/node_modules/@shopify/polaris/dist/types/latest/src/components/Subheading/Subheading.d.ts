import React from 'react';
import type { HeadingTagName } from '../../types';
export interface SubheadingProps {
    /**
     * The element name to use for the subheading
     * @default 'h3'
     */
    element?: HeadingTagName;
    /** Text to display in subheading */
    children?: React.ReactNode;
}
export declare function Subheading({ element: Element, children, }: SubheadingProps): JSX.Element;
