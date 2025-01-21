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
