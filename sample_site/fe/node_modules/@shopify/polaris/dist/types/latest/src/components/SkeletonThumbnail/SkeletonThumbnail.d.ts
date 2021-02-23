/// <reference types="react" />
declare type Size = 'small' | 'medium' | 'large';
export interface SkeletonThumbnailProps {
    /**
     * Size of the thumbnail
     * @default 'medium'
     */
    size?: Size;
}
export declare function SkeletonThumbnail({ size }: SkeletonThumbnailProps): JSX.Element;
export {};
