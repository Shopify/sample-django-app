import React from 'react';
import { SearchField, UserMenu, Menu } from './components';
import type { SearchFieldProps, UserMenuProps, SearchProps } from './components';
export type { UserMenuProps, SearchFieldProps };
export interface TopBarProps {
    /** Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button */
    showNavigationToggle?: boolean;
    /** Accepts a user component that is made available as a static member of the top bar component and renders as the primary menu */
    userMenu?: React.ReactNode;
    /** Accepts a menu component that is made available as a static member of the top bar component */
    secondaryMenu?: React.ReactNode;
    /** Accepts a component that is used to help users switch between different contexts */
    contextControl?: React.ReactNode;
    /** Accepts a search field component that is made available as a `TextField` static member of the top bar component */
    searchField?: React.ReactNode;
    /** Accepts a search results component that is ideally composed of a card component containing a list of actionable search results */
    searchResults?: React.ReactNode;
    /** A boolean property indicating whether search results are currently visible. */
    searchResultsVisible?: boolean;
    /** Whether or not the search results overlay has a visible backdrop */
    searchResultsOverlayVisible?: boolean;
    /** A callback function that handles the dismissal of search results */
    onSearchResultsDismiss?: SearchProps['onDismiss'];
    /** A callback function that handles hiding and showing mobile navigation */
    onNavigationToggle?(): void;
}
export declare const TopBar: React.FunctionComponent<TopBarProps> & {
    Menu: typeof Menu;
    SearchField: typeof SearchField;
    UserMenu: typeof UserMenu;
};
