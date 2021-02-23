import React from 'react';
import type { Action, DisableableAction, LoadableAction } from '../../types';
import { IconProps } from '../Icon';
export declare type BannerStatus = 'success' | 'info' | 'warning' | 'critical';
export interface BannerProps {
    /** Title content for the banner. */
    title?: string;
    /** Icon to display in the banner. Use only major, duotone icons */
    icon?: IconProps['source'];
    /** Sets the status of the banner. */
    status?: BannerStatus;
    /** The child elements to render in the banner. */
    children?: React.ReactNode;
    /** Action for banner */
    action?: DisableableAction & LoadableAction;
    /** Action | Displays a secondary action */
    secondaryAction?: Action;
    /** Callback when banner is dismissed */
    onDismiss?(): void;
    /** Disables screen reader announcements when changing the content of the banner */
    stopAnnouncements?: boolean;
}
export declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<BannerHandles>>;
export interface BannerHandles {
    focus(): void;
}
