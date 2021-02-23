import React from 'react';
import type { DisableableAction } from '../../../../types';
export interface HeaderProps {
    title?: React.ReactNode;
    actions?: DisableableAction[];
    children?: React.ReactNode;
}
export declare function Header({ children, title, actions }: HeaderProps): JSX.Element;
