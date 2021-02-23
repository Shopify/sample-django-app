import React, { Component } from 'react';
import { ScrollTo } from './components';
export interface ScrollableProps extends React.HTMLProps<HTMLDivElement> {
    /** Content to display in scrollable area */
    children?: React.ReactNode;
    /** Scroll content vertically */
    vertical?: boolean;
    /** Scroll content horizontally */
    horizontal?: boolean;
    /** Add a shadow when content is scrollable */
    shadow?: boolean;
    /** Slightly hints content upon mounting when scrollable */
    hint?: boolean;
    /** Adds a tabIndex to scrollable when children are not focusable */
    focusable?: boolean;
    /** Called when scrolled to the bottom of the scroll area */
    onScrolledToBottom?(): void;
}
interface State {
    topShadow: boolean;
    bottomShadow: boolean;
    scrollPosition: number;
    canScroll: boolean;
}
export declare class Scrollable extends Component<ScrollableProps, State> {
    static ScrollTo: typeof ScrollTo;
    static forNode(node: HTMLElement): HTMLElement | Document;
    state: State;
    private stickyManager;
    private scrollArea;
    private handleResize;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private setScrollArea;
    private handleScroll;
    private scrollHint;
    private scrollStep;
    private toggleLock;
    private scrollToPosition;
}
export {};
