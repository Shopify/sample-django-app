/// <reference types="react" />
import type { AppliedFilter, Filter } from '../../types';
export interface FilterCreatorProps {
    filters: Filter[];
    resourceName: {
        singular: string;
        plural: string;
    };
    disabled?: boolean;
    onAddFilter?(newFilter: AppliedFilter): void;
}
export declare function FilterCreator({ filters, resourceName, disabled, onAddFilter, }: FilterCreatorProps): JSX.Element;
