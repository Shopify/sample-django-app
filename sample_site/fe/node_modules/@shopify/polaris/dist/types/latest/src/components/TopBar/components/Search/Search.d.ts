import React from 'react';
export interface SearchProps {
    /** Toggles whether or not the search is visible */
    visible?: boolean;
    /** The content to display inside the search */
    children?: React.ReactNode;
    /** Whether or not the search results overlay has a visible backdrop */
    overlayVisible?: boolean;
    /** Callback when the search is dismissed */
    onDismiss?(): void;
}
export declare function Search({ visible, children, onDismiss, overlayVisible, }: SearchProps): JSX.Element | null;
