/// <reference types="react" />
import type { ActionListItemDescriptor, ActionListSection } from '../../../../types';
export interface SectionProps {
    /** Section of action items */
    section: ActionListSection;
    /** Should there be multiple sections */
    hasMultipleSections: boolean;
    /** Defines a specific role attribute for each action in the list */
    actionRole?: string;
    /** Callback when any item is clicked or keypressed */
    onActionAnyItem?: ActionListItemDescriptor['onAction'];
}
export declare function Section({ section, hasMultipleSections, actionRole, onActionAnyItem, }: SectionProps): JSX.Element;
