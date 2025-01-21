<script lang="ts">
    import type { MouseEventHandler } from "svelte/elements";
    import type { colorType } from "../types/types.js";

    export let type: "button" | "submit" | "reset" = "button";
    export let disabled: boolean = false;
    export let color: colorType = null;
    export let basic: boolean = false;
    export let inverted: boolean = false;
    export let state: "active" | "disabled" | "loading" | null | undefined =
        null;
    export let size:
        | "mini"
        | "tiny"
        | "small"
        | "medium"
        | "large"
        | "big"
        | "huge"
        | "massive" = "medium";
    export let float: "right" | "left" | null | undefined = null;
    export let compact: boolean = false;
    export let fluid: boolean = false;
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
        float && `${float} floated`,
        compact && "compact",
        fluid && "fluid",
        size,
        icon && `${iconPosition !== "left" ? "right" : ""} labeled icon`,
        "button",
    ]
        .filter(Boolean)
        .join(" ");

    if (href && !target) target = "_self";
</script>

{#if href}
    <a class={classNames} {href} target={target || "_self"}>
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
