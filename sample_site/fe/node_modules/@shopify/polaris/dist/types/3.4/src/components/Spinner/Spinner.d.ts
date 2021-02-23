/// <reference types="react" />
declare type Size = 'small' | 'large';
export interface SpinnerProps {
    /**
     * Size of spinner
     * @default 'large'
     */
    size?: Size;
    /** Accessible label for the spinner */
    accessibilityLabel?: string;
    /** Allows the component to apply the correct accessibility roles based on focus */
    hasFocusableParent?: boolean;
}
export declare function Spinner({ size, accessibilityLabel, hasFocusableParent, }: SpinnerProps): JSX.Element;
export {};
