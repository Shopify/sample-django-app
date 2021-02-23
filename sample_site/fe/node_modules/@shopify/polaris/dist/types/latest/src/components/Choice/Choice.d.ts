import React from 'react';
import type { Error } from '../../types';
export interface ChoiceProps {
    /** A unique identifier for the choice */
    id: string;
    /**	Label for the choice */
    label: React.ReactNode;
    /** Whether the associated form control is disabled */
    disabled?: boolean;
    /** Display an error message */
    error?: Error | boolean;
    /** Visually hide the label */
    labelHidden?: boolean;
    /**  Content to display inside the choice */
    children?: React.ReactNode;
    /** Additional text to aide in use */
    helpText?: React.ReactNode;
    /** Callback when clicked */
    onClick?(): void;
    /** Callback when mouse over */
    onMouseOver?(): void;
    /** Callback when mouse out */
    onMouseOut?(): void;
}
export declare function Choice({ id, label, disabled, error, children, labelHidden, helpText, onClick, onMouseOut, onMouseOver, }: ChoiceProps): JSX.Element;
export declare function helpTextID(id: string): string;
