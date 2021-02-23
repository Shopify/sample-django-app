import type { AriaAttributes } from 'react';
export declare function setActivatorAttributes(activator: HTMLElement, { id, active, ariaHaspopup, activatorDisabled, }: {
    id: string;
    active: boolean;
    ariaHaspopup: AriaAttributes['aria-haspopup'];
    activatorDisabled: boolean;
}): void;
