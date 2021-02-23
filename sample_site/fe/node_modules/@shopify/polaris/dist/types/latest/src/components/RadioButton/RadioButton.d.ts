import React from 'react';
export interface RadioButtonProps {
    /** Indicates the ID of the element that describes the the radio button*/
    ariaDescribedBy?: string;
    /** Label for the radio button */
    label: React.ReactNode;
    /** Visually hide the label */
    labelHidden?: boolean;
    /** Radio button is selected */
    checked?: boolean;
    /** Additional text to aid in use */
    helpText?: React.ReactNode;
    /** Disable input */
    disabled?: boolean;
    /** ID for form input */
    id?: string;
    /** Name for form input */
    name?: string;
    /** Value for form input */
    value?: string;
    /** Callback when the radio button is toggled */
    onChange?(newValue: boolean, id: string): void;
    /** Callback when radio button is focussed */
    onFocus?(): void;
    /** Callback when focus is removed */
    onBlur?(): void;
}
export declare function RadioButton({ ariaDescribedBy: ariaDescribedByProp, label, labelHidden, helpText, checked, disabled, onChange, onFocus, onBlur, id: idProp, name: nameProp, value, }: RadioButtonProps): JSX.Element;
