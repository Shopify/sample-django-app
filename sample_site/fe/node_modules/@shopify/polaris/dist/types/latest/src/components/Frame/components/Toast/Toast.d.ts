/// <reference types="react" />
import type { ToastProps } from '../../../../utilities/frame';
export type { ToastProps };
export declare const DEFAULT_TOAST_DURATION = 5000;
export declare const DEFAULT_TOAST_DURATION_WITH_ACTION = 10000;
export declare function Toast({ content, onDismiss, duration, error, action, }: ToastProps): JSX.Element;
