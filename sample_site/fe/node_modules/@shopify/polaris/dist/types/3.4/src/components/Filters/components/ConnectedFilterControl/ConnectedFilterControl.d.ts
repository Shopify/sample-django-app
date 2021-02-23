import React, { Component } from 'react';
import { DisableableAction } from '../../../../types';
interface PopoverableAction extends DisableableAction {
    popoverOpen: boolean;
    popoverContent: React.ReactNode;
    key: string;
    content: string;
    onAction(): void;
}
export interface ConnectedFilterControlProps {
    children: React.ReactNode;
    rightPopoverableActions?: PopoverableAction[] | null;
    rightAction?: React.ReactNode;
    auxiliary?: React.ReactNode;
    disabled?: boolean;
    forceShowMorefiltersButton?: boolean;
    queryFieldHidden?: boolean;
}
interface ComputedProperty {
    [key: string]: number;
}
interface State {
    availableWidth: number;
    proxyButtonsWidth: ComputedProperty;
}
export declare class ConnectedFilterControl extends Component<ConnectedFilterControlProps, State> {
    state: State;
    private container;
    private proxyButtonContainer;
    private moreFiltersButtonContainer;
    private handleResize;
    componentDidMount(): void;
    render(): JSX.Element;
    private measureProxyButtons;
    private measureAvailableWidth;
    private getActionsToRender;
    private activatorButtonFrom;
    private popoverFrom;
}
export {};
