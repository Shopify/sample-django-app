import React from 'react';
import { OptionDescriptor } from '../../../OptionList';
import { PopoverProps } from '../../../Popover';
import { ActionListItemDescriptor } from '../../../../types';
export interface ComboBoxProps {
    /** A unique identifier for the ComboBox */
    id?: string;
    /** Collection of options to be listed */
    options: OptionDescriptor[];
    /** The selected options */
    selected: string[];
    /** The text field component attached to the list of options */
    textField: React.ReactElement;
    /** The preferred direction to open the popover */
    preferredPosition?: PopoverProps['preferredPosition'];
    /** Title of the list of options */
    listTitle?: string;
    /** Allow more than one option to be selected */
    allowMultiple?: boolean;
    /** Actions to be displayed before the list of options */
    actionsBefore?: ActionListItemDescriptor[];
    /** Actions to be displayed after the list of options */
    actionsAfter?: ActionListItemDescriptor[];
    /** Content to be displayed before the list of options */
    contentBefore?: React.ReactNode;
    /** Content to be displayed after the list of options */
    contentAfter?: React.ReactNode;
    /** Is rendered when there are no options */
    emptyState?: React.ReactNode;
    /** Callback when the selection of options is changed */
    onSelect(selected: string[]): void;
    /** Callback when the end of the list is reached */
    onEndReached?(): void;
}
export declare function ComboBox({ id: idProp, options, selected, textField, preferredPosition, listTitle, allowMultiple, actionsBefore, actionsAfter, contentBefore, contentAfter, emptyState, onSelect, onEndReached, }: ComboBoxProps): JSX.Element;
