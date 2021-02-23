import React from 'react';
import type { ActionListItemDescriptor } from '../../types';
import { TextField, ComboBox, ComboBoxProps } from './components';
export interface AutocompleteProps {
    /** A unique identifier for the Autocomplete */
    id?: string;
    /** Collection of options to be listed */
    options: ComboBoxProps['options'];
    /** The selected options */
    selected: string[];
    /** The text field component attached to the list of options */
    textField: React.ReactElement;
    /** The preferred direction to open the popover */
    preferredPosition?: ComboBoxProps['preferredPosition'];
    /** Title of the list of options */
    listTitle?: string;
    /** Allow more than one option to be selected */
    allowMultiple?: boolean;
    /** An action to render above the list of options */
    actionBefore?: ActionListItemDescriptor;
    /** Display loading state */
    loading?: boolean;
    /** Indicates if more results will load dynamically */
    willLoadMoreResults?: boolean;
    /** Is rendered when there are no options */
    emptyState?: React.ReactNode;
    /** Callback when the selection of options is changed */
    onSelect(selected: string[]): void;
    /** Callback when the end of the list is reached */
    onLoadMoreResults?(): void;
}
export declare const Autocomplete: React.FunctionComponent<AutocompleteProps> & {
    ComboBox: typeof ComboBox;
    TextField: typeof TextField;
};
