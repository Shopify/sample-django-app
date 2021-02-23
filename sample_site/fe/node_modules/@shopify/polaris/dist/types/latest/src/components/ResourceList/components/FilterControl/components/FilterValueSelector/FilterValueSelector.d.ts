/// <reference types="react" />
import { Filter, AppliedFilter } from '../../types';
export interface FilterValueSelectorProps {
    filter: Filter;
    filterKey?: string;
    value?: AppliedFilter['value'];
    onChange(filterValue: AppliedFilter['value']): void;
    onFilterKeyChange(filterKey: string): void;
}
export declare function FilterValueSelector({ filter, filterKey, value, onChange, onFilterKeyChange, }: FilterValueSelectorProps): JSX.Element | null;
