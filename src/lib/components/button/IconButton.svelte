<script lang="ts">
    import type { IconButtonProps } from "$lib/types";
    import Button from "./Button.svelte";

    let {
        type = "button",
        labeled = false,
        color = null,
        basic = false,
        inverted = false,
        state = null,
        size= null,
        floated = null,
        compact = false,
        icon,
        position = "left",
        fluid = false,
        circular = false,
        customClass = "",
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

    

    customClass = `icon  ${customClass}`;

    customClass = [
        "icon",
        labeled && "labeled",
        circular && "circular",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

<Button
    {type}
    {color}
    {basic}
    {inverted}
    {state}
    {size}
    {floated}
    {compact}
    {fluid}
    {customClass}
    {href}
    {target}
    {ariaLabel}
    {onClick}
    {onDoubleClick}
>
    {#if icon && position === "left"}
        <i class={`${icon} icon`}></i>
    {/if}
    {#if children}
        {@render children()}
    {/if}
    {#if icon && position === "right"}
        <i class={`${icon} icon`}></i>
    {/if}
</Button>
