import { ReactNode } from 'react';
interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}
export declare function AfterInitialMount({ children, fallback }: Props): JSX.Element;
export {};
