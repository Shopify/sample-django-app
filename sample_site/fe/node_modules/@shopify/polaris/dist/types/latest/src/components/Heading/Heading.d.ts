import React from 'react';
import type { HeadingTagName } from '../../types';
export interface HeadingProps {
    /**
     * The element name to use for the heading
     * @default 'h2'
     */
    element?: HeadingTagName;
    /** The content to display inside the heading */
    children?: React.ReactNode;
}
export declare function Heading({ element: Element, children }: HeadingProps): JSX.Element;
