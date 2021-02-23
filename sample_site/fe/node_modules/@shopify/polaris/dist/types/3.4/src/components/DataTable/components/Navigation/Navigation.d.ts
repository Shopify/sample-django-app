/// <reference types="react" />
import { ColumnVisibilityData } from '../../types';
export interface NavigationProps {
    columnVisibilityData: ColumnVisibilityData[];
    isScrolledFarthestLeft?: boolean;
    isScrolledFarthestRight?: boolean;
    navigateTableLeft?(): void;
    navigateTableRight?(): void;
}
export declare function Navigation({ columnVisibilityData, isScrolledFarthestLeft, isScrolledFarthestRight, navigateTableLeft, navigateTableRight, }: NavigationProps): JSX.Element;
