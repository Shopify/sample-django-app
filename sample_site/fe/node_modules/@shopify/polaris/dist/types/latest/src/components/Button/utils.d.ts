import React from 'react';
import type { ComplexAction } from '../../types';
import { ButtonProps } from './Button';
export declare function buttonsFrom(action: ComplexAction, overrides?: Partial<ButtonProps>): React.ReactElement<ButtonProps>;
export declare function buttonsFrom(actions: ComplexAction[], overrides?: Partial<ButtonProps>): React.ReactElement<ButtonProps>[];
export declare function buttonFrom({ content, onAction, ...action }: ComplexAction, overrides?: Partial<ButtonProps>, key?: any): JSX.Element;
