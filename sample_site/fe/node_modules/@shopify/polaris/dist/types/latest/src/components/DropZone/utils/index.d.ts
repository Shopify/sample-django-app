/// <reference types="react" />
declare type DropZoneEvent = DragEvent | React.ChangeEvent<HTMLInputElement>;
export declare function fileAccepted(file: File, accept: string | undefined): boolean;
export declare function getDataTransferFiles(event: DropZoneEvent): File[] | DataTransferItem[];
export {};
