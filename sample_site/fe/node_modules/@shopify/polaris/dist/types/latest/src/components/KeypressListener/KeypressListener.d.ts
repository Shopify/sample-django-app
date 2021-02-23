import type { Key } from '../../types';
export interface KeypressListenerProps {
    keyCode: Key;
    handler(event: KeyboardEvent): void;
    keyEvent?: KeyEvent;
}
declare type KeyEvent = 'keydown' | 'keyup';
export declare function KeypressListener({ keyCode, handler, keyEvent, }: KeypressListenerProps): null;
export {};
