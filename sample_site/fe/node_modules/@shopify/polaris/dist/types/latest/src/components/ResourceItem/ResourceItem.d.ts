import React from 'react';
import type { DisableableAction } from '../../types';
import type { AvatarProps } from '../Avatar';
import type { ThumbnailProps } from '../Thumbnail';
declare type Alignment = 'leading' | 'trailing' | 'center' | 'fill' | 'baseline';
interface BaseProps {
    /** Visually hidden text for screen readers used for item link*/
    accessibilityLabel?: string;
    /** Individual item name used by various text labels */
    name?: string;
    /** Id of the element the item onClick controls */
    ariaControls?: string;
    /** Tells screen reader the controlled element is expanded */
    ariaExpanded?: boolean;
    /** Unique identifier for the item */
    id: string;
    /** Content for the media area at the left of the item, usually an Avatar or Thumbnail */
    media?: React.ReactElement<AvatarProps | ThumbnailProps>;
    /** Makes the shortcut actions always visible */
    persistActions?: boolean;
    /** 1 or 2 shortcut actions; must be available on the page linked to by url */
    shortcutActions?: DisableableAction[];
    /** The order the item is rendered */
    sortOrder?: number;
    /** URL for the resource’s details page (required unless onClick is provided) */
    url?: string;
    /** Allows url to open in a new tab */
    external?: boolean;
    /** Callback when clicked (required if url is omitted) */
    onClick?(id?: string): void;
    /** Content for the details area */
    children?: React.ReactNode;
    /** Adjust vertical alignment of elements */
    verticalAlignment?: Alignment;
}
interface PropsWithUrl extends BaseProps {
    url: string;
    onClick?(id?: string): void;
}
interface PropsWithClick extends BaseProps {
    url?: string;
    onClick(id?: string): void;
}
export declare type ResourceItemProps = PropsWithUrl | PropsWithClick;
export declare function ResourceItem(props: ResourceItemProps): JSX.Element;
export {};
