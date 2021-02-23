/// <reference types="react" />
export interface SearchFieldProps {
    /** Initial value for the input */
    value: string;
    /** Hint text to display */
    placeholder?: string;
    /** Force the focus state on the input */
    focused?: boolean;
    /** Force a state where search is active but the text field component is not focused */
    active?: boolean;
    /** Callback when value is changed */
    onChange(value: string): void;
    /** Callback when input is focused */
    onFocus?(): void;
    /** Callback when focus is removed */
    onBlur?(): void;
    /** Callback when search field cancel button is clicked */
    onCancel?(): void;
    /** Show a border when the search field is focused */
    showFocusBorder?: boolean;
}
export declare function SearchField({ value, focused, active, placeholder, onChange, onFocus, onBlur, onCancel, showFocusBorder, }: SearchFieldProps): JSX.Element;
