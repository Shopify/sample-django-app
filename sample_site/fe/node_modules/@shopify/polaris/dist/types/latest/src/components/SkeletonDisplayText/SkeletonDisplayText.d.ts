/// <reference types="react" />
declare type Size = 'small' | 'medium' | 'large' | 'extraLarge';
export interface SkeletonDisplayTextProps {
    /**
     * Size of the text
     * @default 'medium'
     */
    size?: Size;
}
export declare function SkeletonDisplayText({ size, }: SkeletonDisplayTextProps): JSX.Element;
export {};
