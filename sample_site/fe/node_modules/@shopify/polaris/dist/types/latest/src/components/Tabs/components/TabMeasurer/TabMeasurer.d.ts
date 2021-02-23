import React from 'react';
import type { TabDescriptor } from '../../types';
interface TabMeasurements {
    containerWidth: number;
    disclosureWidth: number;
    hiddenTabWidths: number[];
}
export interface TabMeasurerProps {
    tabToFocus: number;
    siblingTabHasFocus: boolean;
    activator: React.ReactElement;
    selected: number;
    tabs: TabDescriptor[];
    handleMeasurement(measurements: TabMeasurements): void;
}
export declare const TabMeasurer: React.NamedExoticComponent<TabMeasurerProps>;
export {};
