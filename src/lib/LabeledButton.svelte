<script lang="ts">
    import type { LabeledButtonType } from "../types/types.js";

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
        href = null,
        target = null,
        ariaLabel = "button",
        onclick = null,
        ondblclick = null
    }: LabeledButtonType = $props();

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
        "icon button",
    ]
        .filter(Boolean)
        .join(" ");

    if (href && !target) target = "_self";

    if (!icon) {
        throw new Error("icon is required for IconButton");
    }

    if (state && !["active", "disabled", "loading"].includes(state)) {
        throw new Error(`Invalid state: ${state}`);
    }
</script>

{#if href}
    <a
        class={classNames}
        {href}
        target={target || "_self"}
        aria-label={ariaLabel}
        role="button"
    >
        <i class={`${icon} icon`}></i>
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
        <i class={`${icon} icon`}></i>
    </button>
{/if}
