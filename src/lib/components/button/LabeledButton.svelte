<script lang="ts">
    import type { LabledButtonProps } from "$lib/types";

    let {
        label = null,
        icon = null,
        position = "left",
        color = null,
        basic = false,
        inverted = false,
        state = null,
        size = null,
        children,
    }: LabledButtonProps = $props();

    let classNames = [
        "ui",
        color,
        basic && "basic",
        inverted && "inverted",
        label ? "" : "icon",
        state,
        size,
        "button",
    ]
        .filter(Boolean)
        .join(" ");

    if (state && !["active", "disabled", "loading"].includes(state)) {
        throw new Error(`Invalid state: ${state}`);
    }
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
    class={`ui ${position == "right" ? "left" : ""} labeled  button`}
    tabindex="0"
>
    {#if position == "left"}
        <div class={classNames}>
            <i class={`${icon} icon`}></i>
            {label}
        </div>
    {/if}
    {@render children()}
    {#if position == "right"}
        <div class={classNames}>
            <i class={`${icon} icon`}></i>
            {label}
        </div>
    {/if}
</div>
