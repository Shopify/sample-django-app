/// <reference types="react" />
declare type Status = 'success' | 'info' | 'attention' | 'critical' | 'warning' | 'new';
declare type Progress = 'incomplete' | 'partiallyComplete' | 'complete';
declare type Size = 'small' | 'medium';
export interface BadgeProps {
    /** The content to display inside the badge. */
    children?: string;
    /** Set the color of the badge for the given status. */
    status?: Status;
    /** Render a pip showing the progress of a given task. */
    progress?: Progress;
    /**
     * Medium or small size. Use `small` only in the main navigation of an app frame.
     * @default 'medium'
     */
    size?: Size;
}
export declare function Badge({ children, status, progress, size, }: BadgeProps): JSX.Element;
export {};
