import React from 'react';
import type { Action } from '../../types';
export interface CalloutCardProps {
    /** The content to display inside the callout card. */
    children?: React.ReactNode;
    /** The title of the card */
    title: string;
    /** URL to the card illustration */
    illustration: string;
    /** Primary action for the card */
    primaryAction: Action;
    /** Secondary action for the card */
    secondaryAction?: Action;
    /** Callback when banner is dismissed */
    onDismiss?(): void;
}
export declare function CalloutCard({ title, children, illustration, primaryAction, secondaryAction, onDismiss, }: CalloutCardProps): JSX.Element;
