import React from 'react';
import { ThemeConfig } from '../../utilities/theme';
export interface ThemeProviderProps {
    /** Custom logos and colors provided to select components */
    theme?: ThemeConfig;
    /**
     * By default, Polaris avoids re-declaring custom properties within the same React tree
     * This prop ensures that the CSS custom properties are always rendered. This is useful
     * for components such as portals that render outside of the root DOM node
     */
    alwaysRenderCustomProperties?: boolean;
    /** The content to display */
    children?: React.ReactNode;
}
export declare function ThemeProvider({ theme: themeConfig, alwaysRenderCustomProperties, children, }: ThemeProviderProps): JSX.Element;
