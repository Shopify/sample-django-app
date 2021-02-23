import type { DataTableState } from './types';
interface TableMeasurements {
    firstVisibleColumnIndex: number;
    tableLeftVisibleEdge: number;
    tableRightVisibleEdge: number;
}
export declare function measureColumn(tableData: TableMeasurements): (column: HTMLElement, index: number) => {
    leftEdge: number;
    rightEdge: number;
    isVisible: boolean;
};
export declare function isEdgeVisible(position: number, start: number, end: number): boolean;
export declare function getPrevAndCurrentColumns(tableData: TableMeasurements, columnData: DataTableState['columnVisibilityData']): {
    previousColumn: import("./types").ColumnVisibilityData;
    currentColumn: import("./types").ColumnVisibilityData;
};
export {};
