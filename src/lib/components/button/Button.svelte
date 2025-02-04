<script lang="ts">
    import type { ButtonProps } from "$lib/types";

    let {
        type = "button",
        disabled = false,
        color = null,
        basic = false,
        inverted = false,
        labeled = false,
        state = null,
        attached = null,
        size = "medium",
        floated = null,
        compact = false,
        fluid = false,
        href = null,
        target = null,
        ariaLabel = "button",
        onClick = null,
        onDoubleClick = null,
        children,
    }: ButtonProps = $props();

    let classNames = [
        "ui",
        color,
        basic && "basic",
        inverted && "inverted",
        labeled && "labeled",
        state,
        floated && `${floated} floated`,
        attached && `${attached} attached`,
        compact && "compact",
        fluid && "fluid",
        size,
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
    <a
        class={classNames}
        {href}
        target={target || "_self"}
        role="button"
        aria-label={ariaLabel}
        onclick={onClick}
        ondblclick={onDoubleClick}
    >
        {@render children()}
    </a>
{:else}
    <button
        class={classNames}
        type={type || undefined}
        {disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        onclick={onClick}
        ondblclick={onDoubleClick}
    >
        {@render children()}
    </button>
{/if}
