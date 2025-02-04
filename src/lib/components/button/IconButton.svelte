<script lang="ts">
    import type { IconButtonProps } from "$lib/types";
    import Button from "./Button.svelte";

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
        icon,
        position: iconPosition = "left",
        fluid = false,
        href = null,
        target = null,
        ariaLabel = "button",
        onClick = null,
        onDoubleClick = null,
        children,
    }: IconButtonProps = $props();

    if (!icon) {
        throw new Error(`icon is required`);
    }
</script>

<Button {type} {disabled} {color} {basic} {inverted} {state} {size} {floated} {compact} {fluid} {href} {target} {ariaLabel} {onClick} {onDoubleClick} >
    {#if icon}
        <i class={`${icon} icon`}></i>
    {/if}
    {@render children()}
    {#if icon && iconPosition === "right"}
        <i class={`right icon`}></i>
    {/if}
</Button>
