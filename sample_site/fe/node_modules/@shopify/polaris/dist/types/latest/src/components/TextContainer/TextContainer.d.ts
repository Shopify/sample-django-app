import React from 'react';
declare type Spacing = 'tight' | 'loose';
export interface TextContainerProps {
    /** The amount of vertical spacing children will get between them */
    spacing?: Spacing;
    /** The content to render in the text container. */
    children?: React.ReactNode;
}
export declare function TextContainer({ spacing, children }: TextContainerProps): JSX.Element;
export {};
