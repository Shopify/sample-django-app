import React from 'react';
import { TooltipOverlayProps } from './components';
export interface TooltipProps {
    /** The element that will activate to tooltip */
    children?: React.ReactNode;
    /** The content to display within the tooltip */
    content: React.ReactNode;
    /** Toggle whether the tooltip is visible */
    active?: boolean;
    /** Dismiss tooltip when not interacting with its children */
    dismissOnMouseOut?: TooltipOverlayProps['preventInteraction'];
    /**
     * The direction the tooltip tries to display
     * @default 'below'
     */
    preferredPosition?: TooltipOverlayProps['preferredPosition'];
    /**
     * The element type to wrap the activator in
     * @default 'span'
     */
    activatorWrapper?: string;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
}
export declare function Tooltip({ children, content, dismissOnMouseOut, active: originalActive, preferredPosition, activatorWrapper, accessibilityLabel, }: TooltipProps): JSX.Element;
