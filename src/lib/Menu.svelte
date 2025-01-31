<script lang="ts">
    import type { MenuType, MenuItemType } from "../types/types.ts";

    // Destructure props from $props()
    let {
        vertical = false,
        secondary = false,
        pointing = false,
        tabular = false,
        fluid = false,
        compact = false,
        inverted = false,
        size = null,
        customClass = "",
        styles = "",
        items = [],
        activeItem = null,
        onItemClick = null,
    }: MenuType = $props();

    // Generate class names dynamically
    let classNames = [
        "ui",
        size,
        vertical && "vertical",
        secondary && "secondary",
        pointing && "pointing",
        tabular && "tabular",
        fluid && "fluid",
        compact && "compact",
        inverted && "inverted",
        "menu",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");

    // Handle item click
    const handleItemClick = (key: string) => {
        if (onItemClick) onItemClick(key);
    };
</script>

<div class={classNames} style={styles}>
    {#each items as item}
        <div
            class={`item ${item.disabled ? "disabled" : ""} ${activeItem === item.key ? "active" : ""}`}
            on:click={() => !item.disabled && handleItemClick(item.key)}
        >
            {#if item.icon}
                <i class={`${item.icon} icon`}></i>
            {/if}
            {item.content}
        </div>
    {/each}
</div>
