/// <reference types="react" />
import type { ActionListSection, ActionListItemDescriptor } from '../../../../types';
export interface RollupActionsProps {
    /** Collection of actions for the list */
    items?: ActionListItemDescriptor[];
    /** Collection of sectioned action items */
    sections?: ActionListSection[];
}
export declare function RollupActions({ items, sections }: RollupActionsProps): JSX.Element | null;
