<script lang="ts">
    import type { DividerProps } from "$lib/types/divider";

    let {
        label = null,
        icon = null,
        margin = null,
        hidden = false,
        clearing = false,
        inverted = false,
        axis = null,
        header = false,
    }: DividerProps = $props();

    let classNames = [
        "ui",
        inverted && "inverted",
        margin && margin,
        hidden && "hidden",
        clearing && "clearing",
        axis && axis,
        "divider",
        header && "header",
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames}>
    {#if icon}
        <i class={`${icon} icon`}></i>
    {/if}
    {label}
</div>
