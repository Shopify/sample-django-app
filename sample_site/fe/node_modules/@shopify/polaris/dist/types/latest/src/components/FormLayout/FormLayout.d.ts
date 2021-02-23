import React from 'react';
import { Group } from './components';
export interface FormLayoutProps {
    /** The content to display inside the layout. */
    children?: React.ReactNode;
}
export declare const FormLayout: React.NamedExoticComponent<FormLayoutProps> & {
    Group: typeof Group;
};
