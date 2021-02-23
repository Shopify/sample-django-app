/// <reference types="react" />
export interface NonMutuallyExclusiveProps {
    /** Content to display in the tag */
    children?: string;
    /** Disables the tag  */
    disabled?: boolean;
    /** Callback when tag is clicked or keypressed */
    onClick?(): void;
    /** Callback when remove button is clicked or keypressed */
    onRemove?(): void;
}
export declare type TagProps = NonMutuallyExclusiveProps & ({
    onClick?(): void;
    onRemove?: undefined;
} | {
    onClick?: undefined;
    onRemove?(): void;
});
export declare function Tag({ children, disabled, onClick, onRemove }: TagProps): JSX.Element;
