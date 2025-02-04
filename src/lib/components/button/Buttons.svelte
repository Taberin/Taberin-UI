<script lang="ts">
    import type { ButtonsProps } from "$lib/types";

    let {
        basic = false,
        hasIcon = false,
        attached = null,
        vertical = null,
        labeled = null,
        columns = null,
        color = null,
        size = "medium",
        children,
    }: ButtonsProps = $props();

    let classNames = [
        "ui",
        color,
        basic && "basic",
        hasIcon && "icon",
        columns,
        attached && `${attached} attached`,
        vertical && "vertical",
        labeled && "labeled",
        size,
        "button",
    ]
        .filter(Boolean)
        .join(" ");
</script>

<div class={classNames}>
    {@render children()}
</div>
