import React, { PureComponent } from 'react';
import { FeaturesContext } from '../../../../utilities/features';
export interface ItemProps {
    id: string;
    focused: boolean;
    panelID?: string;
    children?: React.ReactNode;
    url?: string;
    accessibilityLabel?: string;
    onClick?(): void;
}
export declare class Item extends PureComponent<ItemProps, never> {
    static contextType: React.Context<import("../../../../utilities/features").Features | undefined>;
    context: React.ContextType<typeof FeaturesContext>;
    private focusedNode;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private setFocusedNode;
}
