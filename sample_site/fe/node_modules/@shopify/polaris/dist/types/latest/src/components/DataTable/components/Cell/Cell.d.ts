import React from 'react';
import type { SortDirection, VerticalAlign } from '../../types';
export interface CellProps {
    content?: React.ReactNode;
    contentType?: string;
    firstColumn?: boolean;
    truncate?: boolean;
    header?: boolean;
    total?: boolean;
    totalInFooter?: boolean;
    sorted?: boolean;
    sortable?: boolean;
    sortDirection?: SortDirection;
    defaultSortDirection?: SortDirection;
    verticalAlign?: VerticalAlign;
    onSort?(): void;
}
export declare function Cell({ content, contentType, firstColumn, truncate, header, total, totalInFooter, sorted, sortable, sortDirection, verticalAlign, defaultSortDirection, onSort, }: CellProps): JSX.Element;
