import type { Snippet } from "svelte";

export type colorType = "primary" | "secondary" | "positive" | "negative" | "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | null | undefined;

export interface BaseButtonType {
    /**
     * The type of button element: button, submit, or reset.
     */
    type?: "button" | "submit" | "reset";

    /**
     * Determines if the button is disabled.
     */
    disabled?: boolean;

    /**
     * The color of the button (based on Semantic UI colors).
     */
    color?: colorType;

    /**
     * Whether the button has a basic style.
     */
    basic?: boolean;

    /**
     * Whether the button has an inverted style.
     */
    inverted?: boolean;

    /**
     * Add state class for button style.
     */
    state?: "active" | "disabled" | "loading" | null;

    /**
     * A button can have different sizes.
     */
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";

    /**
     * A button can be aligned to the left or right of its container.
     */
    floated?: "right" | "left" | null;

    /**
     * A button can reduce its padding to fit into tighter spaces.
     */
    compact?: boolean;

    /**
     * A button can take the width of its container.
     */
    fluid?: boolean;

    /**
     * A button can have only an icon.
     */
    icon?: string | null;

    /**
     * Link Button.
     */
    href?: string | null;
    target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop" | null;

    /**
     * Accessibility label for the icon button.
     */
    ariaLabel?: string;


    /**
     * Event Handlers
     */
    onclick?: ((event: MouseEvent) => void) | null;
    ondblclick?: ((event: MouseEvent) => void) | null;
}

export interface ButtonType extends BaseButtonType {
    /**
     * Additional properties for Button.
     */
    iconPosition?: "left" | "right" | null;


    children: Snippet;
}


export interface IconButtonType extends BaseButtonType {

}

export interface LabeledButtonType extends BaseButtonType {

}

export interface ContainerType {
    text?: boolean; // Adds the "text" class
    fluid?: boolean; // Adds the "fluid" class
    aligned?: "left" | "center" | "right" | null; // Alignment of content
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children: Snippet;
}

export interface DividerType {
    horizontal?: boolean; // Adds the "horizontal" class
    vertical?: boolean; // Adds the "vertical" class
    inverted?: boolean; // Adds the "inverted" class
    fitted?: boolean; // Removes spacing for the divider
    hidden?: boolean; // Hides the divider visually
    section?: boolean; // Adds space above and below
    clearing?: boolean; // Ensures content above does not sit next to the divider
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children: Snippet;
}

export interface HeaderType {
    type?: "page" | "content" | "sub" | null;
    size?: "huge" | "large" | "medium" | "small" | "tiny" | null; // Header size
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null;
    inverted?: boolean; // Adds the "inverted" class for dark backgrounds
    dividing?: boolean; // Adds the "dividing" class
    block?: boolean; // Adds the "block" class
    attached?: "top" | "bottom" | null; // Adds "top attached" or "bottom attached" class
    floated?: "right" | "left" | null; // Adds "right floated" or "left floated" class
    aligned?: "right" | "left" | "center" | null; // Aligns the header content

    /**
     * A button can have only an icon.
     */
    icon?: string | null;

    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children?: Snippet; // Header content
}

export interface SubHeaderType {
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children?: Snippet; // Header content
}

export interface ImageType {
    src?: string; // Image source
    alt?: string; // Alt text for the image
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive" | null; // Image size
    avatar?: boolean; // Adds the "avatar" class
    bordered?: boolean; // Adds the "bordered" class
    rounded?: boolean; // Adds the "rounded" class
    circular?: boolean; // Adds the "circular" class
    centered?: boolean; // Centers the image
    floated?: "left" | "right" | null; // Floats the image to left or right
    fluid?: boolean; // Makes the image fluid
    inline?: boolean; // Aligns the image inline
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
}
