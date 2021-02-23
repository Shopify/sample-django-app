/// <reference types="react" />
import { MenuActionDescriptor, MenuGroupDescriptor } from '../../../../types';
interface Props {
    /** Collection of page-level secondary actions */
    actions?: MenuActionDescriptor[];
    /** Collection of page-level action groups */
    groups?: MenuGroupDescriptor[];
}
export declare function Actions({ actions, groups }: Props): JSX.Element;
export {};
