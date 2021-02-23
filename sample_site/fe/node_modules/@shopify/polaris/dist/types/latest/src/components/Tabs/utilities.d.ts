import type { TabDescriptor } from './types';
export declare function getVisibleAndHiddenTabIndices(tabs: TabDescriptor[], selected: number, disclosureWidth: number, tabWidths: number[], containerWidth: number): {
    visibleTabs: number[];
    hiddenTabs: number[];
};
