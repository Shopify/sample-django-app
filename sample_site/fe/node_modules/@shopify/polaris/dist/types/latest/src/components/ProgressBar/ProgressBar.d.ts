/// <reference types="react" />
declare type Size = 'small' | 'medium' | 'large';
export interface ProgressBarProps {
    /**
     * The progression of certain tasks
     * @default 0
     */
    progress?: number;
    /**
     * Size of progressbar
     * @default 'medium'
     */
    size?: Size;
}
export declare function ProgressBar({ progress, size }: ProgressBarProps): JSX.Element;
export {};
