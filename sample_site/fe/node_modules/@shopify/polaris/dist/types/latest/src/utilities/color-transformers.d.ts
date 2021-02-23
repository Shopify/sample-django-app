import type { RGBColor, RGBAColor, HSBColor, HSBAColor, HSLColor, HSLAColor } from './color-types';
export declare function rgbString(color: RGBColor | RGBAColor): string;
export declare const rgbaString: typeof rgbString;
export declare function rgbToHex({ red, green, blue }: RGBColor): string;
export declare function hsbToHex(color: HSBColor): string;
export declare function hsbToRgb(color: HSBColor): RGBColor;
export declare function hsbToRgb(color: HSBAColor): RGBAColor;
export declare function hslToRgb(color: HSLColor): RGBColor;
export declare function hslToRgb(color: HSLAColor): RGBAColor;
export declare function rgbToHsb(color: RGBColor): HSBColor;
export declare function rgbToHsl(color: RGBColor): HSLAColor;
export declare function hexToRgb(color: string): {
    red: number;
    green: number;
    blue: number;
};
export declare function colorToHsla(color: string): HSLAColor;
