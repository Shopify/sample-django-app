import React from 'react';
export interface AppliedFilterInterface {
    /** A unique key used to identify the applied filter */
    key: string;
    /** A label for the applied filter */
    label: string;
    /** Callback when the remove button is pressed */
    onRemove(key: string): void;
}
export interface FilterInterface {
    /** A unique key used to identify the filter */
    key: string;
    /** The label for the filter */
    label: string;
    /** The markup for the given filter */
    filter: React.ReactNode;
    /** Whether or not the filter should have a shortcut popover displayed */
    shortcut?: boolean;
    /** Whether or not the filter is disabled */
    disabled?: boolean;
    /**
     * @default false
     * Whether or not the clear button is displayed
     */
    hideClearButton?: boolean;
}
export interface FiltersProps {
    /** Currently entered text in the query field */
    queryValue?: string;
    /** Placeholder text for the query field */
    queryPlaceholder?: string;
    /** Whether the query field is focused */
    focused?: boolean;
    /** Available filters added to the sheet. Shortcut filters are exposed outside of the sheet. */
    filters: FilterInterface[];
    /** Applied filters which are rendered as tags. The remove callback is called with the respective key */
    appliedFilters?: AppliedFilterInterface[];
    /** Callback when the query field is changed */
    onQueryChange(queryValue: string): void;
    /** Callback when the clear button is triggered */
    onQueryClear(): void;
    /** Callback when the reset all button is pressed */
    onClearAll(): void;
    /** Callback when the query field is blurred */
    onQueryBlur?(): void;
    /** Callback when the query field is focused */
    onQueryFocus?(): void;
    /** The content to display inline with the controls */
    children?: React.ReactNode;
    /** Disable all filters */
    disabled?: boolean;
    /** Additional hint text to display below the filters */
    helpText?: string | React.ReactNode;
    /** Hide tags for applied filters */
    hideTags?: boolean;
    /** Hide the query field */
    hideQueryField?: boolean;
}
export declare function Filters(props: FiltersProps): JSX.Element;
