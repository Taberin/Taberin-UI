import type { Snippet } from "svelte";

export type HeaderColorType =  "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black";


export interface HeaderType {
    type?: "page" | "content" | "sub" | null;
    size?: "huge" | "large" | "medium" | "small" | "tiny" | null; // Header size
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null;
    inverted?: boolean; // Adds the "inverted" class for dark backgrounds
    dividing?: boolean; // Adds the "dividing" class
    block?: boolean; // Adds the "block" class
    attached?: "top attached" | "attached" | "bottom attached" | null; // Adds "top attached" or "bottom attached" class
    floated?: "right" | "left" | null; // Adds "right floated" or "left floated" class
    aligned?: "right" | "left" | "center" | "justified" | null; // Aligns the header content
    sub?: boolean | null;
    state?: "disabled" | null;
    color?: HeaderColorType | null;

    /**
     * A button can have only an icon.
     */
    icon?: string | null;

    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children: Snippet; // Header content
}

// export interface IconHeaderType extends HeaderType {
//     icon: string;
//     content?: string | null;
//     sub?: string | null;
// }

export interface SubHeaderType {

    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children: Snippet; // Header content
}