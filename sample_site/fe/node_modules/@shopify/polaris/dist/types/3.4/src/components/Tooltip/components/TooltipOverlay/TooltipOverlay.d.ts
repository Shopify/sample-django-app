import React from 'react';
import { PositionedOverlayProps } from '../../../PositionedOverlay';
export interface TooltipOverlayProps {
    id: string;
    active: boolean;
    preventInteraction?: PositionedOverlayProps['preventInteraction'];
    preferredPosition?: PositionedOverlayProps['preferredPosition'];
    children?: React.ReactNode;
    activator: HTMLElement;
    accessibilityLabel?: string;
    onClose(): void;
}
export declare function TooltipOverlay({ active, activator, preferredPosition, preventInteraction, id, children, accessibilityLabel, }: TooltipOverlayProps): JSX.Element | null;
