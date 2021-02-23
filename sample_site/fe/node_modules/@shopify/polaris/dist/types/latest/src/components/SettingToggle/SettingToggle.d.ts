import React from 'react';
import type { ComplexAction } from '../../types';
export interface SettingToggleProps {
    /** Inner content of the card */
    children?: React.ReactNode;
    /** Card header actions */
    action?: ComplexAction;
    /** Sets toggle state to enabled or disabled */
    enabled?: boolean;
}
export declare function SettingToggle({ enabled, action, children }: SettingToggleProps): JSX.Element;
