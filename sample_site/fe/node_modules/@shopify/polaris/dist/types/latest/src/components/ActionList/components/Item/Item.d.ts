/// <reference types="react" />
import type { ActionListItemDescriptor } from '../../../../types';
export declare type ItemProps = ActionListItemDescriptor;
export declare function Item({ id, badge, content, accessibilityLabel, helpText, url, onAction, icon, image, prefix, suffix, disabled, external, destructive, ellipsis, active, role, }: ItemProps): JSX.Element;
