import React from 'react';
import { FrameContext } from '../../utilities/frame';
import { ThemeConfig } from '../../utilities/theme';
import { MediaQueryContext } from '../../utilities/media-query';
import { I18n } from '../../utilities/i18n';
import { LinkLikeComponent } from '../../utilities/link';
import { FeaturesConfig } from '../../utilities/features';
declare type FrameContextType = NonNullable<React.ContextType<typeof FrameContext>>;
declare type MediaQueryContextType = NonNullable<React.ContextType<typeof MediaQueryContext>>;
/**
 * When writing a custom mounting function `mountWithAppContext(node, options)`
 * this is the type of the options object. These values are customizable when
 * you call the app
 */
export interface WithPolarisTestProviderOptions {
    i18n?: ConstructorParameters<typeof I18n>[0];
    link?: LinkLikeComponent;
    theme?: ThemeConfig;
    mediaQuery?: Partial<MediaQueryContextType>;
    features?: FeaturesConfig;
    frame?: Partial<FrameContextType>;
}
export interface PolarisTestProviderProps extends WithPolarisTestProviderOptions {
    children: React.ReactElement;
    strict?: boolean;
}
export declare function PolarisTestProvider({ strict, children, i18n, link, theme, mediaQuery, features, frame, }: PolarisTestProviderProps): JSX.Element;
export {};
