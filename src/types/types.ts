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
    onClick?: ((event: MouseEvent) => void) | null;
    onDoubleClick?: ((event: MouseEvent) => void) | null;
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
    children: Snippet; // Header content
}

export interface IconHeaderType extends HeaderType {
    icon: string;
    content?: string | null;
    sub?: string | null;
}

export interface SubHeaderType {

    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    children: Snippet; // Header content
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

export interface InputType {
    type?: string; // Input type (e.g., text, password, email)
    placeholder?: string; // Placeholder text for the input
    value?: string; // Input value
    disabled?: boolean; // Disables the input field
    loading?: boolean; // Adds the "loading" class
    icon?: string | null; // Icon for the input
    iconPosition?: "left" | "right"; // Position of the icon
    fluid?: boolean; // Makes the input fluid (full-width)
    inverted?: boolean; // Adds the "inverted" class
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive" | null; // Size of the input
    error?: boolean; // Highlights the input in red for error
    transparent?: boolean; // Adds the "transparent" class
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    onInput?: ((event: InputEvent) => void) | null; // Event handler for input
    onChange?: ((event: Event) => void) | null; // Event handler for change
}


export interface BaseMessageType {
    size?: "mini" | "tiny" | "small" | "large" | "big" | "huge" | "massive" | null; // Size of the message
    color?: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | null; // Color of the message
    compact?: boolean; // Adds the "compact" class
    floating?: boolean; // Adds the "floating" class
    attached?: "top" | "bottom" | null; // Adds the "attached" class
    inverted?: boolean; // Adds the "inverted" class
    warning?: boolean; // Adds the "warning" class
    positive?: boolean; // Adds the "positive" class
    negative?: boolean; // Adds the "negative" class
    error?: boolean; // Adds the "error" class
    info?: boolean; // Adds the "info" class
    hidden?: boolean; // Adds the "hidden" class
    visible?: boolean; // Adds the "visible" class
    dismissable?: boolean; // Enables dismiss button
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    onDismiss?: (() => void) | null; // Event handler for dismiss button
}

export interface CustomMessageType extends BaseMessageType {
    children: Snippet;
}

export interface MessageType extends BaseMessageType {
    header?: string | null; // Header text for the message
    content?: string | null; // Content text for the message
}

export interface ListMessageType extends BaseMessageType {
    header?: string | null; // Header text for the message
    items: string[]; // Content text for the message
}

export interface IconMessageType extends MessageType {
    icon?: string | null; // Icon for the message
    loading?: boolean | null;
}

export interface PlaceholderType {
    fluid?: boolean; // Adds the "fluid" class
    inverted?: boolean; // Adds the "inverted" class
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    content?: Array<PlaceholderContent>; // Placeholder content (rows, headers, lines, etc.)
}

export interface PlaceholderContent {
    type: "header" | "paragraph" | "line" | "image"; // Type of placeholder
    count?: number; // Number of lines or placeholders (default: 1)
}

export interface MenuType {
    vertical?: boolean; // Adds the "vertical" class
    secondary?: boolean; // Adds the "secondary" class
    pointing?: boolean; // Adds the "pointing" class
    tabular?: boolean; // Adds the "tabular" class
    fluid?: boolean; // Makes the menu fluid
    compact?: boolean; // Adds the "compact" class
    inverted?: boolean; // Adds the "inverted" class
    size?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive"; // Size of the menu
    customClass?: string; // Additional custom classes
    styles?: string; // Inline styles
    items?: MenuItemType[]; // Array of menu items
    activeItem?: string; // Key of the active menu item
    onItemClick?: (key: string) => void; // Event handler when a menu item is clicked
}

export interface MenuItemType {
    key: string; // Unique key for the menu item
    content: string; // Text or content of the menu item
    icon?: string; // Optional icon for the menu item
    disabled?: boolean; // If true, the menu item is disabled
}
