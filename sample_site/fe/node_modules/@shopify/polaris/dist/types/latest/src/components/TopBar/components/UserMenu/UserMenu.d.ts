/// <reference types="react" />
import type { IconableAction } from '../../../../types';
import { AvatarProps } from '../../../Avatar';
import { MenuProps } from '../Menu';
export interface UserMenuProps {
    /** An array of action objects that are rendered inside of a popover triggered by this menu */
    actions: {
        items: IconableAction[];
    }[];
    /** Accepts a message that facilitates direct, urgent communication with the merchant through the user menu */
    message?: MenuProps['message'];
    /** A string detailing the merchant’s full name to be displayed in the user menu */
    name: string;
    /** A string allowing further detail on the merchant’s name displayed in the user menu */
    detail?: string;
    /** A string that provides the accessibility labeling */
    accessibilityLabel?: string;
    /** The merchant’s initials, rendered in place of an avatar image when not provided */
    initials: AvatarProps['initials'];
    /** An avatar image representing the merchant */
    avatar?: AvatarProps['source'];
    /** A boolean property indicating whether the user menu is currently open */
    open: boolean;
    /** A callback function to handle opening and closing the user menu */
    onToggle(): void;
    /** Accepts a color scheme for the contents of the user menu */
    colorScheme?: MenuProps['colorScheme'];
}
export declare function UserMenu({ name, detail, avatar, initials, actions, message, onToggle, open, colorScheme, accessibilityLabel, }: UserMenuProps): JSX.Element;
