<script lang="ts">
    import type { DividerType } from "../types/types";

    // Props destructuring using $props()
    let {
        horizontal = false,
        vertical = false,
        inverted = false,
        fitted = false,
        hidden = false,
        section = false,
        clearing = false,
        customClass = "",
        styles = "",
        children,
    }: DividerType = $props();

    // Build classNames dynamically
    let classNames = [
        "ui",
        horizontal && "horizontal",
        vertical && "vertical",
        inverted && "inverted",
        fitted && "fitted",
        hidden && "hidden",
        section && "section",
        clearing && "clearing",
        "divider",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

{#if children}
    <div class={classNames} style={styles}>{@render children()}</div>
{:else}
    <div class={classNames} style={styles}></div>
{/if}
