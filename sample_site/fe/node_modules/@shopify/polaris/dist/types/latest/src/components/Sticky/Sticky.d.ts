import React from 'react';
export declare type StickyProps = {
    /** Element outlining the fixed position boundaries */
    boundingElement?: HTMLElement | null;
    /** Offset vertical spacing from the top of the scrollable container */
    offset?: boolean;
    /** Should the element remain in a fixed position when the layout is stacked (smaller screens)  */
    disableWhenStacked?: boolean;
} & ({
    children: React.ReactNode;
} | {
    children(isSticky: boolean): React.ReactNode;
});
export declare function Sticky(props: StickyProps): JSX.Element;
