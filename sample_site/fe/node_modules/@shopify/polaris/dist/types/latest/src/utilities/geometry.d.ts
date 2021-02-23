/// <reference types="react" />
interface RectConfig {
    top?: number;
    left?: number;
    width?: number;
    height?: number;
}
interface Point {
    x: number;
    y: number;
}
export declare class Rect {
    static get zero(): Rect;
    top: number;
    left: number;
    width: number;
    height: number;
    constructor({ top, left, width, height }?: RectConfig);
    get center(): Point;
}
export declare function getRectForNode(node: Element | React.ReactNode | Window): Rect;
export {};
