import type { Snippet } from "svelte";

export type ButtonColorType = "primary" | "secondary" | "positive" | "negative" | "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black";
export type ButtonSizeType = "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";
export type ButtonLinkTargetType = "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
export type ButtonStateType = "active" | "disabled" | "loading";

export interface ButtonProps {
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
    color?: ButtonColorType | null | undefined;
    /**
     * Whether the button has a basic style.
     */
    basic?: boolean;
    labeled?: boolean;
    /**
     * Whether the button has an inverted style.
     */
    inverted?: boolean;

    attached?: "top" | "bottom" | null;

    /**
     * Add state class for button style.
     */
    state?: ButtonStateType | null;
    /**
     * A button can have different sizes.
     */
    size?: ButtonSizeType | null;
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

    customClass?: string | null;

    /**
     * Link Button.
     */
    href?: string | null;
    target?: ButtonLinkTargetType | null;
    pointing?: "right" | "left" | null;
    /**
     * Accessibility label for the icon button.
     */
    ariaLabel?: string;
    /**
     * Event Handlers
     */
    onClick?: ((event: MouseEvent) => void) | null;
    onDoubleClick?: ((event: MouseEvent) => void) | null;

    /**
     * Slot or children of component
     */
    children?: Snippet | null;
}

export interface IconButtonProps extends ButtonProps {
    icon: string;
    position?: "left" | "right" | null;
    circular?: boolean | null;
}

export interface ButtonsProps {
    /**
    * Whether the button has a basic style.
    */
    basic?: boolean;

    /**
     * A button can have different sizes.
     */
    size?: ButtonSizeType;

    hasIcon?: boolean | null;
    labeled?: boolean | null;
    columns?: "two" | "three" | "four" | "five" | null;
    attached?: "top" | "bottom" | null;
    vertical?: boolean | null;
    color?: ButtonColorType | null;
    children: Snippet;
}

export interface LabledButtonProps {
    color?: ButtonColorType | null | undefined;
    basic?: boolean | null | undefined;
    inverted?: boolean | null;
    /**
     * Add state class for button style.
     */
    state?: ButtonStateType | null;
    size?: ButtonSizeType | null;
    icon?: string | null;
    position?: "left" | "right" | null;
    label?: string | null;
}