import React from 'react';
import type { ComplexAction } from '../../../../types';
export interface FooterProps {
    /** Primary action */
    primaryAction?: ComplexAction;
    /** Collection of secondary actions */
    secondaryActions?: ComplexAction[];
    /** The content to display inside modal */
    children?: React.ReactNode;
}
export declare function Footer({ primaryAction, secondaryActions, children, }: FooterProps): JSX.Element;
