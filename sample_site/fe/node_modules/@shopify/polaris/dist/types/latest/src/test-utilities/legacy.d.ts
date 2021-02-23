import { ReactWrapper, CommonWrapper } from 'enzyme';
import type { ReactElement } from 'react';
import { act } from 'react-dom/test-utils';
import { WithPolarisTestProviderOptions } from '../components';
export { ReactWrapper, act };
declare type AnyWrapper = ReactWrapper<any, any> | CommonWrapper<any, any>;
export declare function findByTestID(root: ReactWrapper<any, any>, id: string): ReactWrapper<any, any, import("react").Component<{}, {}, any>>;
export declare function trigger(wrapper: AnyWrapper, keypath: string, ...args: any[]): any;
export declare function mountWithAppProvider<P>(node: ReactElement<P>, context?: WithPolarisTestProviderOptions): ReactWrapper<P, any, import("react").Component<{}, {}, any>>;
