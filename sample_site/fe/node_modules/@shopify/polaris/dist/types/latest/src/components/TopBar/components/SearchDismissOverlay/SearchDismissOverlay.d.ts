/// <reference types="react" />
interface Props {
    /** Callback when the search is dismissed */
    onDismiss?(): void;
    /** Determines whether the overlay should be visible */
    visible: boolean;
}
export declare function SearchDismissOverlay({ onDismiss, visible }: Props): JSX.Element;
export {};
