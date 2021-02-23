import React from 'react';
import { PortalsContainerElement } from '../../utilities/portals';
export interface PortalsManagerProps {
    children: React.ReactNode;
    container?: PortalsContainerElement;
}
export declare function PortalsManager({ children, container }: PortalsManagerProps): JSX.Element;
