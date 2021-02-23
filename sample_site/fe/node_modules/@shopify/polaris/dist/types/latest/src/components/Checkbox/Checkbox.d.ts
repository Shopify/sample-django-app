import React from 'react';
import { Error, CheckboxHandles } from '../../types';
export interface CheckboxProps {
    /** Indicates the ID of the element that describes the checkbox*/
    ariaDescribedBy?: string;
    /** Label for the checkbox */
    label: React.ReactNode;
    /** Visually hide the label */
    labelHidden?: boolean;
    /** Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox */
    checked?: boolean | 'indeterminate';
    /** Additional text to aide in use */
    helpText?: React.ReactNode;
    /** Disable input */
    disabled?: boolean;
    /** ID for form input */
    id?: string;
    /** Name for form input */
    name?: string;
    /** Value for form input */
    value?: string;
    /** Display an error message */
    error?: Error | boolean;
    /** Callback when checkbox is toggled */
    onChange?(newChecked: boolean, id: string): void;
    /** Callback when checkbox is focussed */
    onFocus?(): void;
    /** Callback when focus is removed */
    onBlur?(): void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<CheckboxHandles>>;
