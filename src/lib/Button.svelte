<script lang="ts">
    import type { colorType } from "../types/types.js";

    /**
     * The type of button element: button, submit, or reset.
     */
    export let type: "button" | "submit" | "reset" = "button";

    /**
     * Determines if the button is disabled.
     */
    export let disabled: boolean = false;

    /**
     * The color of the button (based on Semantic UI colors).
     */
    export let color: colorType = null;

    /**
     * Whether the button has a basic style.
     */
    export let basic: boolean = false;

    /**
     * Whether the button has a inverted style.
     */
    export let inverted: boolean = false;

    /**
     * Add state class for button style.
     */
    export let state: "active" | "disabled" | "loading" | null | undefined =
        null;

    /**
     * A button can have different sizes
     */
    export let size:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive" = "medium";

    /**
     * A button can be aligned to the left or right of its container
     */
    export let floated: "right" | "left" | null | undefined = null;

    /**
     * A button can reduce its padding to fit into tighter spaces
     */
    export let compact: boolean = false;

    /**
     * A button can take the width of its container
     */
    export let fluid: boolean = false;

    /**
     * A button can have only an icon
     */
    export let icon: string | null | undefined = null;
    export let iconPosition: "left" | "right" | null | undefined = "left";

    /**
     * Link Button
     */
    export let href: string | null | undefined = null;
    export let target:
        | "_self"
        | "_blank"
        | "_parent"
        | "_top"
        | "_unfencedTop"
        | null
        | undefined = null;

    export let onclick: ((event: MouseEvent) => void) | null = null;
    export let ondblclick: ((event: MouseEvent) => void) | null = null;

    if (!iconPosition) iconPosition = "left";

    let classNames = [
        "ui",
        color,
        basic && "basic",
        inverted && "inverted",
        state,
        floated && `${floated} floated`,
        compact && "compact",
        fluid && "fluid",
        size,
        icon && `${iconPosition !== "left" ? "right" : ""} labeled icon`,
        "button",
    ]
        .filter(Boolean)
        .join(" ");

    if (href && !target) target = "_self";

    if (state && !["active", "disabled", "loading"].includes(state)) {
        throw new Error(`Invalid state: ${state}`);
    }
</script>

{#if href}
    <a class={classNames} {href} target={target || "_self"} role="button">
        {#if icon}
            <i class={`${icon} icon`}></i>
        {/if}
        <slot></slot>
        {#if icon && iconPosition === "right"}
            <i class={`right icon`}></i>
        {/if}
    </a>
{:else}
    <button
        class={classNames}
        type={type || undefined}
        {disabled}
        aria-disabled={disabled}
        {onclick}
        {ondblclick}
    >
        {#if icon}
            <i class={`${icon} icon`}></i>
        {/if}
        <slot></slot>
        {#if icon && iconPosition === "right"}
            <i class={`right icon`}></i>
        {/if}
    </button>
{/if}
