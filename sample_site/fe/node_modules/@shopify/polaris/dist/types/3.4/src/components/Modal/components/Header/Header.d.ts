import React from 'react';
export interface HeaderProps {
    id: string;
    titleHidden: boolean;
    children?: React.ReactNode;
    onClose(): void;
}
export declare function Header({ id, titleHidden, children, onClose }: HeaderProps): JSX.Element;
