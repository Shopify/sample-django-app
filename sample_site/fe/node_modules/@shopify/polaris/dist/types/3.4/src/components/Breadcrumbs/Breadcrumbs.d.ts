/// <reference types="react" />
import { CallbackAction, LinkAction } from '../../types';
export interface BreadcrumbsProps {
    /** Collection of breadcrumbs */
    breadcrumbs: (CallbackAction | LinkAction)[];
}
export declare function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps): JSX.Element | null;
