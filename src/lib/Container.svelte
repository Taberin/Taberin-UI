<script lang="ts">
    import type { ContainerType } from "../types/types.ts";

    let {
        text = false,
        fluid = false,
        aligned = null,
        customClass = "",
        styles = "",
        children,
    }: ContainerType = $props();

    // Build the classNames dynamically
    let classNames = [
        "ui",
        fluid && "fluid",
        text && "text",
        aligned && `${aligned} aligned`,
        "container",
        customClass,
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames} style={styles}>
    {@render children()}
</div>
