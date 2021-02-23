import React from 'react';
import { AnnotatedSection, Section } from './components';
export interface LayoutProps {
    /** Automatically adds sections to layout. */
    sectioned?: boolean;
    /** The content to display inside the layout. */
    children?: React.ReactNode;
}
export declare const Layout: React.FunctionComponent<LayoutProps> & {
    AnnotatedSection: typeof AnnotatedSection;
    Section: typeof Section;
};
