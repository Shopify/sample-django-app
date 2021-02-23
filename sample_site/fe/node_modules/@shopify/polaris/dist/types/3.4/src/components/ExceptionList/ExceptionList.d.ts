import React from 'react';
import { IconProps } from '../Icon';
declare type Description = string | React.ReactElement | (string | React.ReactElement)[];
interface Item {
    /** Set the color of the icon and title for the given item. */
    status?: 'critical' | 'warning';
    /** Icon displayed by the list item */
    icon?: IconProps['source'];
    /** Text displayed beside the icon */
    title?: string;
    /** Text displayed for the item */
    description?: Description;
    /** Should the description be truncated at end of line */
    truncate?: boolean;
}
export interface ExceptionListProps {
    /** Collection of items for list */
    items: Item[];
}
export declare function ExceptionList({ items: itemsList }: ExceptionListProps): JSX.Element;
export {};
