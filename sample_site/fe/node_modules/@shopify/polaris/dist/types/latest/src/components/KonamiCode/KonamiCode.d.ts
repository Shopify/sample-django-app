import { Key } from '../../types';
export interface KonamiCodeProps {
    handler(event: KeyboardEvent): void;
}
export declare const KONAMI_CODE: Key[];
export declare function KonamiCode({ handler }: KonamiCodeProps): null;
