import React from 'react';
export interface PortalProps {
    children?: React.ReactNode;
    idPrefix?: string;
    onPortalCreated?(): void;
}
export declare function Portal({ children, idPrefix, onPortalCreated, }: PortalProps): React.ReactPortal | null;
