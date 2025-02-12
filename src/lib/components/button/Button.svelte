<script lang="ts">
    import type { ButtonProps } from "$lib/types";

    let {
        type = "button",
        color = null,
        basic = false,
        inverted = false,
        labeled = false,
        state = null,
        attached = null,
        size = null,
        floated = null,
        compact = false,
        fluid = false,
        customClass = null,
        href = null,
        target = null,
        ariaLabel = "button",
        onClick = null,
        onDoubleClick = null,
        children,
    }: ButtonProps = $props();

    let disabled = state == "disabled";

    let classNames = [
        "ui",
        color,
        basic && "basic",
        inverted && "inverted",
        labeled && "labeled",
        state,
        customClass,
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
        href={disabled ? "javascript:void(0)" : href}
        target={target || "_self"}
        role="button"
        aria-label={ariaLabel}
        onclick={onClick}
        ondblclick={onDoubleClick}
    >
        {#if children}
            {@render children()}
        {/if}
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
        {#if children}
            {@render children()}
        {/if}
    </button>
{/if}
