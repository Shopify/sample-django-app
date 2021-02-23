/// <reference types="react" />
import type { CheckboxHandles } from '../../types';
import type { ResourceListSelectedItems, CheckableButtonKey } from './types';
export interface ResourceListContextType {
    registerCheckableButtons?(key: CheckableButtonKey, button: CheckboxHandles): void;
    selectMode?: boolean;
    selectable?: boolean;
    selectedItems?: ResourceListSelectedItems;
    resourceName?: {
        singular: string;
        plural: string;
    };
    loading?: boolean;
    onSelectionChange?(selected: boolean, id: string, sortNumber: number | undefined, shiftKey: boolean): void;
}
export declare const ResourceListContext: import("react").Context<ResourceListContextType>;
