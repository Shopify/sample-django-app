import React from 'react';
export interface FrameProps {
    /** The content to display inside the frame. */
    children?: React.ReactNode;
    /** Accepts a top bar component that will be rendered at the top-most portion of an application frame */
    topBar?: React.ReactNode;
    /** Accepts a navigation component that will be rendered in the left sidebar of an application frame */
    navigation?: React.ReactNode;
    /** Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame */
    globalRibbon?: React.ReactNode;
    /** A boolean property indicating whether the mobile navigation is currently visible
     * @default false
     */
    showMobileNavigation?: boolean;
    /** Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link */
    skipToContentTarget?: React.RefObject<HTMLAnchorElement>;
    /** A callback function to handle clicking the mobile navigation dismiss button */
    onNavigationDismiss?(): void;
}
export declare function Frame(props: FrameProps): JSX.Element;
