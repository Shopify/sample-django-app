/// <reference types="react" />
export interface CheckableButtonProps {
    accessibilityLabel?: string;
    label?: string;
    selected?: boolean | 'indeterminate';
    selectMode?: boolean;
    smallScreen?: boolean;
    plain?: boolean;
    measuring?: boolean;
    disabled?: boolean;
    onToggleAll?(): void;
}
export declare function CheckableButton({ accessibilityLabel, label, onToggleAll, selected, selectMode, plain, measuring, disabled, smallScreen, }: CheckableButtonProps): JSX.Element;
