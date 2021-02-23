/// <reference types="react" />
import type { ComplexAction, DisableableAction, LoadableAction } from '../../types';
export interface PageActionsProps {
    /** The primary action for the page */
    primaryAction?: DisableableAction & LoadableAction;
    /** The secondary actions for the page */
    secondaryActions?: ComplexAction[];
}
export declare function PageActions({ primaryAction, secondaryActions, }: PageActionsProps): JSX.Element;
