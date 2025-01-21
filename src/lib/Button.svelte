<script lang="ts">
    import type { ButtonType } from "../types/types.ts";

    let {
        type = "button",
        disabled = false,
        color = null,
        basic = false,
        inverted = false,
        state = null,
        size = "medium",
        floated = null,
        compact = false,
        fluid = false,
        icon = null,
        iconPosition = "left",
        href = null,
        target = null,
        ariaLabel = "button",
        onClick: onclick = null,
        onDoubleClick: ondblclick = null,
        children,
    }: ButtonType = $props();

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
    <a class={classNames} {href} target={target || "_self"} role="button" aria-label={ariaLabel}>
        {#if icon}
            <i class={`${icon} icon`}></i>
        {/if}
        {@render children()}
        {#if icon && iconPosition === "right"}
            <i class={`right icon`}></i>
        {/if}
    </a>
{:else}
    <button
        class={classNames}
        type={type || undefined}
        {disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        {onclick}
        {ondblclick}
    >
        {#if icon}
            <i class={`${icon} icon`}></i>
        {/if}
        {@render children()}
        {#if icon && iconPosition === "right"}
            <i class={`right icon`}></i>
        {/if}
    </button>
{/if}
