/// <reference types="react" />
import type { PortalsContainerElement } from './types';
export interface PortalsManager {
    container: PortalsContainerElement;
}
export declare const PortalsManagerContext: import("react").Context<PortalsManager | undefined>;
