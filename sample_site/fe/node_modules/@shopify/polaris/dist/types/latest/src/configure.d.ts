export interface Polaris {
    VERSION: string;
}
declare global {
    interface Window {
        Polaris: Polaris;
    }
}
export declare const polarisVersion = "{{POLARIS_VERSION}}";
