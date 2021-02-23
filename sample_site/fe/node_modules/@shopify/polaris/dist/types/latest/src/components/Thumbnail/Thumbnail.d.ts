import React from 'react';
declare type Size = 'small' | 'medium' | 'large';
export interface ThumbnailProps {
    /**
     * Size of thumbnail
     * @default 'medium'
     */
    size?: Size;
    /** URL for the image */
    source: string | React.SFC<React.SVGProps<SVGSVGElement>>;
    /** Alt text for the thumbnail image */
    alt: string;
}
export declare function Thumbnail({ source, alt, size }: ThumbnailProps): JSX.Element;
export {};
