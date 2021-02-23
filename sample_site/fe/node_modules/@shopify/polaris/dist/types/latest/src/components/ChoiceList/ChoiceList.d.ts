import React from 'react';
import type { Error } from '../../types';
interface Choice {
    /** Value of the choice */
    value: string;
    /** Label for the choice */
    label: React.ReactNode;
    /** Disable choice */
    disabled?: boolean;
    /** Additional text to aide in use */
    helpText?: React.ReactNode;
    /** Indicates that the choice is aria-describedBy the error message*/
    describedByError?: boolean;
    /**  Method to render children with a choice */
    renderChildren?(isSelected: boolean): React.ReactNode | false;
}
export interface ChoiceListProps {
    /** Label for list of choices */
    title: React.ReactNode;
    /** Collection of choices */
    choices: Choice[];
    /** Collection of selected choices */
    selected: string[];
    /** Name for form input */
    name?: string;
    /** Allow merchants to select multiple options at once */
    allowMultiple?: boolean;
    /** Toggles display of the title */
    titleHidden?: boolean;
    /** Display an error message */
    error?: Error;
    /** Disable all choices **/
    disabled?: boolean;
    /** Callback when the selected choices change */
    onChange?(selected: string[], name: string): void;
}
export declare function ChoiceList({ title, titleHidden, allowMultiple, choices, selected, onChange, error, disabled, name: nameProp, }: ChoiceListProps): JSX.Element;
export {};
